import { readdirSync, statSync } from "fs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const local = searchParams.get('local') || 'saigon'
  const restaurant = searchParams.get('restaurant') || 'A by Tung'
  const path = require('path');
  //joining path of directory 
  const directoryPath = path.join(process.cwd() + `/public/bites/`);
  const localtions = readdirSync(directoryPath);
  let files = [];

  function ThroughDirectory(dir) {
    readdirSync(dir).forEach(File => {
      const Absolute = path.join(dir, File);
      if (statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
      else return files.push(Absolute.replace(process.cwd() + `/public`, ''));
    });
  }
  ThroughDirectory(directoryPath)
  return Response.json({ files })
}