
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
    return <div className="md:grid grid-cols-6 gap-1 md:gap-3 items-center">
      <div className=" relative col-span-3">
        <div className="relative grid" style={{ paddingBottom: '142.222%' }}>
          <Image src={props.images?.[0]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
        </div>
      </div>
      <div className="col-span-3 py-12 md:pl-12">
        {props.en && <TinaMarkdown content={props.en} className="text-justify whitespace-pre-line">
        </TinaMarkdown>}
      </div>
    </div>

  },
  B2: (props: PageBlocksContentFields): ReactNode => {
    return <div className="relative grid" style={{ paddingBottom: '70.3125%' }}>
      <div style={{ display: 'block', overflow: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', margin: 0 }}>
        <Image src={props.images?.[0]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
      </div>
    </div>
  },
  B3: (props: PageBlocksContentFields): ReactNode => {
    return <div className="flex flex-col items-center py-12 w-full">
      <div className="whitespace-pre-line text-justify max-w-prose mx-auto">
        <TinaMarkdown content={props.en} >
        </TinaMarkdown>
      </div>
    </div>
  },
  B4: (props: PageBlocksContentFields): ReactNode => {
    return <div className="grid md:grid-cols-3 gap-1 md:gap-3">
      <div className="md:col-span-2">
        <div className="relative grid" style={{ paddingBottom: '70.3125%' }}>
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
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
      <div className="relative grid" style={{ paddingBottom: '70.3125%' }}>
        <Image src={props.images?.[0]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
      </div>
      <div className="relative grid" style={{ paddingBottom: '70.3125%' }}>
        <Image src={props.images?.[1]} fill className='absolute inset-0 w-full h-full object-cover bg-slate-50 bg-opacity-30' />
      </div>
    </div>
  },
  B7: (props: PageBlocksContentFields): ReactNode => {
    return (
      <div className="items-center space-y-12 py-12 text-center">
        <h3 className="font-kinfolk text-center text-4xl leading-none">The Decoration</h3>
        <div className="grid lg:grid-cols-3  gap-1 md:gap-3  lg:gap-12">
          <div>
            <div className="font-garamond font-semibold italic text-lg" />
            <div className="h-3" />
            <div className="text-justify whitespace-pre-line">Ho Chi Minh Museum was designed in the style of Indochinese architecture with its inherent perfect beauty. Home Garden Wedding Decor and we tried to keep the decoration as simple as possible to keep the full breath of elegance and luxury as it was.</div>
          </div>
          <div>
            <div className="font-garamond font-semibold italic text-lg" />
            <div className="h-3" />
            <div className="text-justify whitespace-pre-line">There was a bump in the road with the rental company we booked and they couldn’t deliver the goods as promised. Fortunately, we were able to find another rental company the night before the wedding and everything went just smoothly. The new chairs perfectly matched the design of the museum.</div>
          </div>
          <div>
            <div className="font-garamond font-semibold italic text-lg" />
            <div className="h-3" />
            <div className="text-justify whitespace-pre-line">We chose the canopy and the flagpole as the background to enhance the existing charm of the museum as well as showing the couple's love of Vietnam. Besides, we used their favorite street’s names to name the guest tables, which brought excitement to their guests.</div>
          </div>
        </div>
      </div>

    )
  },
  B8: (props: PageBlocksContentFields): ReactNode => {
    return (
      <div className="grid md:grid-cols-3 gap-1 md:gap-3">
        <div className="md:col-span-2">
          <div className="relative grid" style={{ paddingBottom: '70.3125%' }}>
            <div style={{ display: 'block', overflow: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', margin: 0 }}>
              <img alt="meraki wedding planners" src="https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1921,f_auto/uploads/DSC_3696_b623e9b958.jpg?141" decoding="async" className="cursor-pointer" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: 'center center', filter: 'none', backgroundSize: 'cover', backgroundImage: 'none' }} sizes="(max-width: 384px) 400px,(max-width: px) 500px,(max-width: 1400px) 960px, 960px" srcSet="https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_16,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 16w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_32,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 32w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_48,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 48w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_64,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 64w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_96,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 96w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_128,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 128w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_256,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 256w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_384,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 384w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_640,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 640w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_828,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 828w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1200,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 1200w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1921,f_auto/uploads/DSC_3696_b623e9b958.jpg?141 1921w" />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 lg:space-y-3">
          <div className="flex-1 relative">
            <div className="relative grid" style={{ paddingBottom: '70.3125%' }}>
              <div style={{ display: 'block', overflow: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', margin: 0 }}>
                <img alt="meraki wedding planners" src="https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1921,f_auto/uploads/A020578_25cf516f06.jpg?140" decoding="async" className="cursor-pointer" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: 'center center', filter: 'none', backgroundSize: 'cover', backgroundImage: 'none' }} sizes="(max-width: 384px) 400px,(max-width: px) 500px,(max-width: 1400px) 960px, 960px" srcSet="https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_16,f_auto/uploads/A020578_25cf516f06.jpg?140 16w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_32,f_auto/uploads/A020578_25cf516f06.jpg?140 32w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_48,f_auto/uploads/A020578_25cf516f06.jpg?140 48w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_64,f_auto/uploads/A020578_25cf516f06.jpg?140 64w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_96,f_auto/uploads/A020578_25cf516f06.jpg?140 96w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_128,f_auto/uploads/A020578_25cf516f06.jpg?140 128w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_256,f_auto/uploads/A020578_25cf516f06.jpg?140 256w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_384,f_auto/uploads/A020578_25cf516f06.jpg?140 384w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_640,f_auto/uploads/A020578_25cf516f06.jpg?140 640w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_828,f_auto/uploads/A020578_25cf516f06.jpg?140 828w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1200,f_auto/uploads/A020578_25cf516f06.jpg?140 1200w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1921,f_auto/uploads/A020578_25cf516f06.jpg?140 1921w" />
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative grid" style={{ paddingBottom: '70.3125%' }}>
              <div style={{ display: 'block', overflow: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', margin: 0 }}>
                <img alt="meraki wedding planners" src="https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1921,f_auto/uploads/DSC_4042_3dfe077685.jpg?138" decoding="async" className="cursor-pointer" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: 'center center', filter: 'none', backgroundSize: 'cover', backgroundImage: 'none' }} sizes="(max-width: 384px) 400px,(max-width: px) 500px,(max-width: 1400px) 960px, 960px" srcSet="https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_16,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 16w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_32,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 32w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_48,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 48w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_64,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 64w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_96,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 96w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_128,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 128w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_256,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 256w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_384,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 384w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_640,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 640w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_828,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 828w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1200,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 1200w, https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1921,f_auto/uploads/DSC_4042_3dfe077685.jpg?138 1921w" />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export function StoryContent({ data }: { data: PageBlocksContent }) {
  let ratio = (bgImage.height / bgImage.width) * 100;
  return (
    <div className="min-h-screen text-[12px] lg:text-lg relative isolate text-[#111111ff] flex flex-col gap-6">
      <div style={{
        minHeight: ratio + 'vw',
      }} className='py-[min(24px,4vw)]  pb-[10vw] gap-[10vw] flex flex-col relative justify-center '>
        <Image src={bgImage} priority placeholder='blur' className='fixed -z-10 inset-0 w-full h-full max-w-full object-cover animate-fade' />
        <div className=" w-full flex flex-col gap-1 md:gap-3 text-[1.4em] leading-normal">
          {data.fields?.map((i, ii) => {
            let C = i?.variant && compornent[i?.variant] || compornent.B3
            if (!C) return <div data-tina-field={tinaField(data, `fields.${ii}`)} key={ii} className='px-6 lg:px-12 xl:px-24 w-full mx-auto max-w-screen-xl'>
              <C {...i} />
            </div>
            return <div data-tina-field={tinaField(data, `fields.${ii}`)} key={ii} className='px-6 lg:px-12 xl:px-24 w-full mx-auto max-w-screen-xl'>
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
    console.log({ item })
    return item?.__typename === 'PageBlocksContent' && item?.name === 'story'
  })
  const data = source?.blocks[index]
  if (!data) return null
  return <Field name={`blocks.${index}.name`}>
    <StoryContent data={data} />
  </Field>
}
