
import { NextRequest, NextResponse } from 'next/server';
import { getCountriesData } from '@/lib/api-utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') === 'ar' ? 'ar' : 'en';

  try {
    const countries = await getCountriesData();
    const responseData = countries.map(country => ({
      code: country.code,
      name: lang === 'ar' ? country.name : country.english_name,
    }));

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Failed to load countries data:', error);
    return NextResponse.json({ message: 'Failed to load data' }, { status: 500 });
  }
}
