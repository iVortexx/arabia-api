
import { NextRequest, NextResponse } from 'next/server';
import { getCountriesData } from '@/lib/api-utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') === 'ar' ? 'ar' : 'en';

  try {
    const countries = await getCountriesData();
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    const responseData = {
      code: randomCountry.code,
      name: lang === 'ar' ? randomCountry.name : randomCountry.english_name,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Failed to load random country data:', error);
    return NextResponse.json({ message: 'Failed to load data' }, { status: 500 });
  }
}
