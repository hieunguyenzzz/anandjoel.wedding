

"use client";

import { useSource } from '@/libs/source';

import "react-svg-map/lib/index.css";
import Vietnammap from '../vietnammap';


export default function Explore() {
  const source = useSource();
  let index = source?.blocks?.findIndex((item: any) => {
    console.log({ item })
    return item?.__typename === 'PageBlocksContent' && item?.name === 'event'
  })
  console.log({ source, index })
  const data = source?.blocks?.[index || -1]
  return <div className='flex '>
    <div className='flex-1 w-1/2  text-[#607d8b'>
      <div className='sticky top-[130px] w-full h-[calc(100vh-126px)]'><Vietnammap /></div>

    </div>
    <div className='container w-1/2'>
    </div>
  </div>
}