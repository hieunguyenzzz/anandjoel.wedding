
"use client";
import Image from '@/components/common/image';
import bgImage from '../../../public/event/bg2.png';
import { PageBlocksContent } from '../../../tina/__generated__/types';

import { useSource } from '@/libs/source';
import { Field } from "@/libs/tina";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export function EventContent({ data }: { data: PageBlocksContent }) {
  let ratio = (bgImage.height / bgImage.width) * 100
  return (
    <div className="min-h-screen animate-fade-up animate-duration-[2000] animate-ease-in-out container mx-auto  relative isolate text-[#111111ff] flex flex-col gap-6">
      <div style={{
        minHeight: ratio + 'vw',
      }} className='py-[18vw]  px-[20%] pb-[30vw] gap-[10vw] flex flex-col relative justify-center '>
        <Image src={bgImage} priority placeholder='blur' fill className='absolute -z-10 top-0 left-0 w-full' />
        {
          data.fields?.map((item, index) => {
            return <div key={index} data-tina-field={item ? tinaField(item, "en") : undefined} className='prose prose-hr:max-w-[50%] prose-hr:mx-auto  text-[12px] lg:text-[calc(min(2vw,30px))] mx-auto whitespace-pre-wrap font-title prose-h3:font-title prose-p:my-[0.3em] text-center prose-img:m-auto prose-h3:py-1 prose-h3:text-[1.4em] prose-h3:font-bold'><TinaMarkdown content={item?.en} /></div>
          })
        }
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none '></div>
      </div>
    </div>
  )
}
export default function Event() {
  const source = useSource();
  let index = source?.blocks?.findIndex((item: any) => {
    console.log({ item })
    return item?.__typename === 'PageBlocksContent' && item?.name === 'event'
  })
  console.log({ source, index })
  const data = source?.blocks?.[index || -1]
  return <Field name={`blocks.${index}.name`}>{data && <EventContent data={data} />}</Field>
}
