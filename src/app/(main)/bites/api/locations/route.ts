import { readdirSync } from "fs";

export async function GET(request: Request) {
  const path = require('path');
  //joining path of directory 
  const directoryPath = path.join(process.cwd() + `/public/bites/`);
  const files = readdirSync(directoryPath);
  return Response.json({ files })
}