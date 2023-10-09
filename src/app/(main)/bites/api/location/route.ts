import { readdirSync } from "fs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const local = searchParams.get('local') || 'saigon'
  const restaurant = searchParams.get('restaurant') || 'A by Tung'
  const path = require('path');
  //joining path of directory 
  const directoryPath = path.join(process.cwd() + `/public/bites/${local}/${restaurant}/`);
  const files = readdirSync(directoryPath);
  return Response.json({ files })
}