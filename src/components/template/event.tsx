
"use client";
import Image from '@/components/common/image';
import bgImage from '../../../public/event/bg2.png';
import { PageBlocksContent, PageQuery } from '../../../tina/__generated__/types';

import { useSetSource } from "@/libs/source";
import { Field } from "@/libs/tina";
import { useEffect } from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export function EventContent({ data }: { data: PageBlocksContent }) {
  let ratio = (bgImage.height / bgImage.width) * 100
  return (
    <div className="min-h-screen text-[12px] lg:text-[2vw] relative isolate text-[#111111ff] flex flex-col gap-6">
      <div style={{
        minHeight: ratio + 'vw',
      }} className='py-[18vw]  px-[20%] pb-[30vw] gap-[10vw] flex flex-col relative justify-center '>
        <Image src={bgImage} priority placeholder='blur' fill className='absolute -z-10 top-0 left-0 w-full' />
        {
          data.fields?.map((item, index) => {
            return <div data-tina-field={item ? tinaField(item, "en") : undefined} className='prose text-[12px] lg:text-[2vw] whitespace-pre-wrap font-title prose-h3:font-title prose-p:my-[0.3em] text-center prose-img:m-auto prose-h3:py-1 prose-h3:text-[1.4em] prose-h3:font-bold'><TinaMarkdown content={item?.en} /></div>
          })
        }
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none '></div>
      </div>
    </div>
  )
}
export default function Event(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  const setSource = useSetSource()
  useEffect(() => {
    setSource(data.page)
  }, [data])
  return <>
    {
      data.page.blocks?.map((item, index) => {
        if (item?.__typename === 'PageBlocksContent') {
          if (item?.name === 'event') {
            return <Field name={`blocks.${index}.name`}><EventContent data={item} /></Field>
          }
        }
        return null
      })
    }
  </>
}
