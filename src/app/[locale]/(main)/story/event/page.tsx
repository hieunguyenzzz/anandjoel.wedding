import fs from 'fs';
import path from 'path';
import { Suspense } from 'react';
import EventPage from './_components/eventPage';

function listAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = listAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}
let files: string[] = []
listAllFiles('public/events', files)
let galleries = [
  {
    label: 'Morning',
    items: [] as string[]
  },
  {
    label: 'Evening',
    items: [] as string[]
  },
  {
    label: 'Making of',
    items: [] as string[]
  },
]
  files.forEach(item => {
  let key = item.replace("public/events/", "").split("_").shift()
  let _item = item.replace("public/","/")
  let extension = item.split(".").pop()
  if(extension?.toLowerCase()!=='jpg')
    return 
  switch (key) {
    case "1":
    case "2":
    case "3":
      galleries[0].items.push(_item)
      break;
    case "4":
    case "5":
    case "6":
      galleries[1].items.push(_item)
      break;
    case "8":
      galleries[2].items.push(_item)
      break;
    default:
      break;
  }
})
export type GalleriesType = typeof galleries
export default function Page() {
  return (
    <Suspense>
      <EventPage   galleries={galleries}/>
    </Suspense>
  );
}