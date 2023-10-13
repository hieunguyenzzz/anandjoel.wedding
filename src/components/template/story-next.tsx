
"use client";
import bgImage from '../../../public/qa_bg.png';
import { PageBlocksContent, PageBlocksContentFields } from '../../../tina/__generated__/types';

import { useSource } from '@/libs/source';
import { Field } from "@/libs/tina";
import { ReactNode } from 'react';
import { tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Image from '../common/image';

const compornent = {
  B1: (props: PageBlocksContentFields): ReactNode => {
    return <div>
      {props.en && <div className="text-justify whitespace-pre-line">
        <TinaMarkdown content={props.en} >
        </TinaMarkdown></div>}
      <div className="relative grid mt-12" style={{ paddingBottom: '142.222%' }}>
        <Image src={props.images?.[0]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
      </div>

    </div>

  },
  B2: (props: PageBlocksContentFields): ReactNode => {
    return <div className="grid md:grid-cols-12 gap-1 md:gap-3">
      <div className="md:col-span-5 h-full ">
        <div className="relative grid h-full" style={{ paddingBottom: '142.222%' }}>
          <Image src={props.images?.[0]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
        </div>
      </div>
      <div className="grid h-full md:col-span-7">
        <div className="relative  h-full">
          <Image src={props.images?.[1]} width={800} height={800} className='md:absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
        </div>
      </div>
    </div>
  },
  B3: (props: PageBlocksContentFields): ReactNode => {
    return <div className="flex flex-col items-center py-12 w-full">
      <div className="whitespace-pre-line text-justify max-w-prose mx-auto px-3 md:px-12">
        <TinaMarkdown content={props.en} >
        </TinaMarkdown>
      </div>
    </div>
  },
  B4: (props: PageBlocksContentFields): ReactNode => {
    return <div className="grid md:grid-cols-2 gap-1 md:gap-3">
      <div className="md:col-span-1 h-full ">
        <div className="relative grid" style={{ paddingBottom: '142.222%' }}>
          <Image src={props.images?.[0]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
        </div>
      </div>
      <div className="grid">
        <div className="relative grid" style={{ paddingBottom: '142.222%' }}>
          <Image src={props.images?.[1]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
        </div>
      </div>
    </div>
  },
  B5: (props: PageBlocksContentFields): ReactNode => {
    return <div className="md:flex items-center flex-row-reverse ">
      <div className="flex-1 relative">
        <div style={{ zIndex: -1 }}>
          <div className="relative grid" style={{ paddingBottom: '70.3125%' }}>
            <Image src={props.images?.[0]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
          </div>
        </div>
      </div>
      <div className="py-12 w-full md:flex-1 md:pr-12">
        <div className="whitespace-pre-line text-justify max-w-prose mx-auto">
          <TinaMarkdown content={props.en} >
          </TinaMarkdown>
        </div>
      </div>
    </div>

  },
  B6: (props: PageBlocksContentFields): ReactNode => {
    return <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3">
      <div className="relative grid" style={{ paddingBottom: '140.3125%' }}>
        <Image src={props.images?.[0]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
      </div>
      <div className="relative grid h-full" style={{ paddingBottom: '140.3125%' }}>
        <Image src={props.images?.[1]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
      </div>
      <div className="relative grid h-full" style={{ paddingBottom: '140.3125%' }}>
        <Image src={props.images?.[2]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
      </div>
    </div>
  },
  B7: (props: PageBlocksContentFields): ReactNode => {
    return (
      <Image src={props.images?.[0]} width={800} height={800} className='w-full h-auto object-cover bg-slate-50 bg-opacity-30' />
    )
  }
}
export function StoryContent({ data }: { data: PageBlocksContent }) {
  let ratio = (bgImage.height / bgImage.width) * 100;
  return (
    <div className="min-h-screen text-[12px] lg:text-lg relative isolate text-[#1a1a1a] flex flex-col gap-6">
      <div style={{
        minHeight: ratio + 'vw',
      }} className='py-[min(24px,4vw)]  pb-[10vw] gap-[10vw] flex flex-col relative justify-center '>
        <div className=" w-full flex flex-col text-[1.4em] leading-normal gap-1 md:gap-3">
          {data.fields?.map((i, ii) => {
            let C = i?.variant && compornent[i?.variant] || compornent.B3

            return <div data-tina-field={tinaField(data, `fields.${ii}`)} key={ii} className='px-6 md:px-24 lg:px-12  w-full mx-auto max-w-screen-xl'>
              <C {...i} />
            </div>
          })}

        </div>
      </div>
    </div>
  )
}
export default function Story() {
  const source = useSource();
  let index = source?.blocks?.findIndex((item: any) => {
    return item?.__typename === 'PageBlocksContent' && item?.name === 'story'
  })
  const data = source?.blocks[index]
  if (!data) return null
  return <Field name={`blocks.${index}.name`}>
    <StoryContent data={data} />
  </Field>
}
