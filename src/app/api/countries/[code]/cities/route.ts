
import { NextRequest, NextResponse } from 'next/server';
import { getCountriesData } from '@/lib/api-utils';

export async function GET(request: NextRequest, { params }: { params: { code: string } }) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') === 'ar' ? 'ar' : 'en';
  const { code } = params;

  try {
    const countries = await getCountriesData();
    const country = countries.find(c => c.code.toLowerCase() === code.toLowerCase());

    if (!country) {
      return NextResponse.json({ message: 'Country not found' }, { status: 404 });
    }

    const responseData = country.cities.map(city => ({
      name: city[lang],
    }));

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Failed to load cities data:', error);
    return NextResponse.json({ message: 'Failed to load data' }, { status: 500 });
  }
}
