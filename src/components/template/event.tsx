
"use client";
import Image from '@/components/common/image';
import bgImage from '@/public/event/bg2.png';
import { PageBlocksContent } from '../../../tina/__generated__/types';

import { useSource } from '@/libs/source';
import { Field } from "@/libs/tina";
import { useEffect, useState } from 'react';
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export function EventContent({ data }: { data: PageBlocksContent }) {
  let ratio = (bgImage.height / bgImage.width) * 100
  return (
    <div className='isolate'>
      <Image src={bgImage} priority placeholder='blur' className='fixed  inset-0 object-cover  h-full top-0 left-0 w-full' />
      <div className="min-h-screen -up animate-duration-[2000] animate-ease-in-out container mx-auto  relative isolate text-[#1a1a1a] flex flex-col gap-6">
        <div style={{
          minHeight: ratio + '%',
        }} className='py-[4vw] lg:py-[5vw]  md:px-[20%] pb-[50vh] lg:pb-[30vw] gap-[10vw] flex flex-col relative justify-center '>
          
          {
            data.fields?.map((item, index) => {
              return <div key={index} data-tina-field={item ? tinaField(item, "en") : undefined} className='prose  max-w-[calc(100vw-24px)] full prose-img:my-[2em] prose-hr:max-w-[50%] prose-h1:mb-[0.5em] prose-h1:font-header prose-hr:mx-auto prose-img:max-h-[2.4em]  lg:text-[calc(min(2vw,28px))] mx-auto whitespace-pre-wrap prose-h3:font-title prose-p:my-[0.3em] text-center prose-img:m-auto prose-h3:py-1 prose-h3:text-[1.4em] prose-h3:font-bold'><TinaMarkdown content={item?.en} /></div>
            })
          }
          <div className='absolute top-0 left-0 w-full h-full pointer-events-none '></div>
        </div>
      </div>
    </div>

  )
}
let hadShow = false
let pass = 'lebrach'
export default function Event() {
  const [show, setShow] = useState(hadShow)
  const source = useSource();
  useEffect(() => {
    let show = localStorage.getItem('hadShow')
    if (show) setShow(true)
  }, [])
  useEffect(() => {
    if (show) {
      hadShow = true
      localStorage.setItem('hadShow', JSON.stringify(hadShow))

    }
  }, [show])
  let index = source?.blocks?.findIndex((item: any) => {
    console.log({ item })
    return item?.__typename === 'PageBlocksContent' && item?.name === 'event'
  })
  if (!show) return <div className="w-full h-full min-h-[600px] py-[140px] flex justify-center items-center z-50 isolate">
    <div className='max-w-xl text-center'>
      <h3 className="font-bold text-lg">Password</h3>
      <div className='block w-full py-6' >
        <input onChange={e => {
          if (e.target.value === pass) setShow(true)
        }} type="text" placeholder="Type here" className="input block  input-bordered w-full max-w-xs" />
        <button className='btn btn-block btn-primary mt-6'>Submit</button>
      </div >
    </div >
  </div >
  const data = source?.blocks?.[index || -1]
  return <Field name={`blocks.${index}.name`}>{data && <EventContent data={data} />}</Field>
}
