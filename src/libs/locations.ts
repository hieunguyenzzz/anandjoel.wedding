
import { readdirSync } from 'fs';
import path from 'path';
const directoryPath = path.join(process.cwd() + `/public/bites/`)
const locations = readdirSync(directoryPath);

export default locations;