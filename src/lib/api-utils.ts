
import fs from 'fs/promises';
import path from 'path';

export interface City {
  ar: string;
  en: string;
}

export interface Country {
  code: string;
  name: string;
  english_name: string;
  cities: City[];
}

export async function getCountriesData(): Promise<Country[]> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'countries.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}
