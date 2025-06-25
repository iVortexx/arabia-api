
import { NextRequest, NextResponse } from 'next/server';
import { getCountriesData } from '@/lib/api-utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') === 'ar' ? 'ar' : 'en';

  try {
    const countries = await getCountriesData();
    const allCities = countries.flatMap(country => 
      country.cities.map(city => ({
        ...city,
        countryName: lang === 'ar' ? country.name : country.english_name,
        countryCode: country.code,
      }))
    );

    const randomCity = allCities[Math.floor(Math.random() * allCities.length)];

    const responseData = {
      name: randomCity[lang],
      country: randomCity.countryName,
      countryCode: randomCity.countryCode,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Failed to load random city data:', error);
    return NextResponse.json({ message: 'Failed to load data' }, { status: 500 });
  }
}
