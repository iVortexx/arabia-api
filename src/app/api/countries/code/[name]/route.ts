
import { NextRequest, NextResponse } from 'next/server';
import { getCountriesData } from '@/lib/api-utils';

export async function GET(request: NextRequest, { params }: { params: { name: string } }) {
  const { name } = params;

  if (!name) {
    return NextResponse.json({ message: 'Country name is required' }, { status: 400 });
  }

  try {
    const countries = await getCountriesData();
    const lowercasedName = decodeURIComponent(name).toLowerCase();

    const country = countries.find(c => 
      c.english_name.toLowerCase() === lowercasedName || 
      c.name.toLowerCase() === lowercasedName
    );

    if (!country) {
      return NextResponse.json({ message: 'Country not found' }, { status: 404 });
    }

    return NextResponse.json({ code: country.code, name: country.english_name, arabic_name: country.name });
  } catch (error) {
    console.error('Failed to load country data:', error);
    return NextResponse.json({ message: 'Failed to load data' }, { status: 500 });
  }
}
