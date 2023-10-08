
"use client";
import Image from 'next/image';
import bgImage from '../../../public/qa_bg.png';
import { PageBlocksContent } from '../../../tina/__generated__/types';

import { useSource } from '@/libs/source';
import { Field } from "@/libs/tina";
import { tinaField } from 'tinacms/dist/react';
import Content from '../common/markdow';

export function StoryContent({ data }: { data: PageBlocksContent }) {
  let ratio = (bgImage.height / bgImage.width) * 100;

  return (
    <div className="min-h-screen text-[12px] lg:text-lg relative isolate text-[#111111ff] flex flex-col gap-6">
      <div style={{
        minHeight: ratio + 'vw',
      }} className='py-[min(24px,4vw)]  pb-[10vw] gap-[10vw] flex flex-col relative justify-center '>
        <Image src={bgImage} priority placeholder='blur' className='fixed -z-10 inset-0 w-full h-full max-w-full object-cover animate-fade' />
        <div className="join join-vertical w-full  prose mx-auto  lg:text-[min(2vw,20px)] whitespace-pre-wrap prose-h3:font-title prose-p:my-[0.3em] prose-img:m-auto prose-h3:py-1 prose-h3:text-[1.4em] prose-h3:font-bold">
          <h1 className='text-[2.4em] py-4 font-title text-center'>{data.title}</h1>
          <div className="join join-vertical w-full  prose mx-auto lg:text-[min(2vw,20px)] whitespace-pre-wrap prose-h3:font-title prose-p:my-[0.3em] prose-img:m-auto prose-h3:py-1 prose-h3:!mt-[1em]  prose-h3:text-[1.4em] prose-h3:font-bold">
            {data.fields?.map((i, ii) => <div key={ii} data-tina-field={tinaField(data, `fields.${ii}.en`)}><Content content={i?.en}></Content></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Travel() {
  const source = useSource();
  let index = source?.blocks?.findIndex((item: any) => {
    console.log({ item })
    return item?.__typename === 'PageBlocksContent' && item?.name === 'travel'
  })
  const data = source?.blocks[index]
  if (!data) return null
  return <Field name={`blocks.${index}.name`}><StoryContent data={data} /></Field>
}
