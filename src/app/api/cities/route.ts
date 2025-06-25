
import { NextRequest, NextResponse } from 'next/server';
import { getCountriesData } from '@/lib/api-utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') === 'ar' ? 'ar' : 'en';
  const countryCode = searchParams.get('country');

  try {
    const countries = await getCountriesData();
    let cities: { name: string, country: string }[] = [];

    const sourceCountries = countryCode
      ? countries.filter(c => c.code.toLowerCase() === countryCode.toLowerCase())
      : countries;

    if (countryCode && sourceCountries.length === 0) {
      return NextResponse.json({ message: 'Country not found' }, { status: 404 });
    }

    sourceCountries.forEach(country => {
      country.cities.forEach(city => {
        cities.push({
          name: city[lang],
          country: lang === 'ar' ? country.name : country.english_name
        });
      });
    });

    return NextResponse.json(cities);
  } catch (error) {
    console.error('Failed to load cities data:', error);
    return NextResponse.json({ message: 'Failed to load data' }, { status: 500 });
  }
}
