
import { NextRequest, NextResponse } from 'next/server';
import { getCountriesData } from '@/lib/api-utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const lang = searchParams.get('lang') === 'ar' ? 'ar' : 'en';

  if (!query) {
    return NextResponse.json({ message: 'Search query is required' }, { status: 400 });
  }

  try {
    const countries = await getCountriesData();
    const searchResults = {
      countries: [] as any[],
      cities: [] as any[],
    };

    const lowercasedQuery = query.toLowerCase();

    countries.forEach(country => {
      // Search in English and Arabic names
      if (country.english_name.toLowerCase().includes(lowercasedQuery) || country.name.toLowerCase().includes(lowercasedQuery)) {
        searchResults.countries.push({
          code: country.code,
          name: lang === 'ar' ? country.name : country.english_name,
        });
      }

      country.cities.forEach(city => {
        if (city.en.toLowerCase().includes(lowercasedQuery) || city.ar.toLowerCase().includes(lowercasedQuery)) {
          searchResults.cities.push({
            name: city[lang],
            country: lang === 'ar' ? country.name : country.english_name,
            countryCode: country.code
          });
        }
      });
    });
    
    // De-duplicate results
    const uniqueCountries = Array.from(new Map(searchResults.countries.map(c => [c.code, c])).values());
    const uniqueCities = Array.from(new Map(searchResults.cities.map(c => [`${c.name}-${c.country}`, c])).values());
    
    searchResults.countries = uniqueCountries;
    searchResults.cities = uniqueCities;

    return NextResponse.json(searchResults);
  } catch (error) {
    console.error('Search failed:', error);
    return NextResponse.json({ message: 'Search operation failed' }, { status: 500 });
  }
}
