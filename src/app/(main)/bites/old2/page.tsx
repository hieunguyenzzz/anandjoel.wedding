"use client"
import Image from "@/components/common/image";
import Bitenext from "@/components/template/bites-detail-next";
import { useSource } from "@/libs/source";
import { Field } from "@/libs/tina";
import React, { useState } from "react";
import { clsx } from "yet-another-react-lightbox";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import sideBG from '../_assets/AJ-web-03.png';
import bgImage from '../_assets/bites-bg.png';
import bgBottom from '../_assets/bites-bottom.png';
export default function Page() {
  const [id, setid] = useState(-1)
  const source = useSource()
  const data = source?.blocks?.find((item: any) => item?.__typename === 'PageBlocksBites')
  let reset = 0
  let left = false
  console.log({ data })
  return (
    <>
      <div className="grid py-12 sm:grid-cols-2 lg:grid-cols-3 gap-3 isolate container mx-auto lg:gap-16 max-w-5xl">
        <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full h-full max-w-full object-cover animate-fade' />
        <Image src={sideBG} priority placeholder='blur' className='fixed object-top object-scale-down left-0 w-[60px] top-0 h-full  animate-fade hidden' />
        <Image src={sideBG} priority placeholder='blur' className='fixed object-top right-0 h-full object-scale-down w-[60px] top-0  animate-fade hidden' />
        {
          data?.item?.map((item, index) => {
            const title = item?.title || ''
            const description = item?.description || ''
            const id = index
            const images = item.gallery?.map(i => i?.image || "").filter(Boolean)

            if (item?.variant === "Two") {
              return <React.Fragment key={index}>
                <Field className={clsx("col-span-full py-6 lg:py-12  lg:mt-8 justify-between flex gap-6 flex-col md:items-center", left ? "md:flex-row-reverse" : "md:flex-row")} name={`blocks.0.item.${index}.title`}>
                  <div className=' h-full relative'>
                    <h3 className="text-[2em] font-title uppercase text-magical-item leading-[1.2] whitespace-nowrap">{title}</h3>
                  </div>
                  <div className=" lg:w-2/3 ">
                    <div className={clsx("font-subtitle max-w-xl  flex-1 text-opacity-75 opacity-75 text-justify", !left ? "lg:ml-auto" : "lg:mr-auto")}>{description || `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-
                      my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`}</div>
                  </div>
                </Field>
                {
                  (() => {

                    reset = 0
                    left = !left
                    return null
                  })()
                }
              </React.Fragment>
            }
            let isABC = false
            return <Field key={index} name={`blocks.0.item.${index}.title`} className="">
              {
                (() => {
                  if (reset % 3 === 1) {
                    isABC = !isABC
                  }
                  reset = reset + 1

                  return null
                })()
              }
              <div className={clsx('w-full pt-[140%] h-full   relative group', isABC && 'lg:transform lg:translate-y-[2em]')}>
                <Image src={item?.image} width={400} height={400} alt={title || ''} className='object-cover  h-full w-full absolute inset-0  border-8 border-[#c2c5ff]' />
                <button style={{ background: `linear-gradient(0deg, rgb(0 0 0 / 84%) 0%, rgba(0, 0, 0, 0) 100%)` }} onClick={() => setid(id)} className="absolute text-left  transition-all duration-500 ease-in-out group-hover:bg-black group-hover:bg-opacity-50 left-0 top-0 h-full w-full flex justify-start items-end text-magical ">
                  <div className=" text-white flex items-center   p-[1em_1.5em_2em_1.5em] relative isolate">
                    <div className=" items-start ">
                      <h3 className="text-[1.2em] font-title uppercase text-magical-item leading-[1.2] inline">{title}</h3>
                      <div className="flex-1">
                        <div className="font-subtitle flex items-center gap-2 italic text-[0.8em] max-w-md mx-auto">
                          {description}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </Field >
          })
        }
      </div >
      <Bitenext key={id} id={id} onClose={() => setid(-1)} />
      <div className="relative isolate z-10">
        <div className=" flex pb-[20em] pt-[8em] justify-center items-center">
          {data?.bottom_text && <div className="max-w-[40ch] leading-relaxed mx-auto text-lg lg:text-[2rem] text-center px-10 lg:px-12"><TinaMarkdown content={data?.bottom_text} /></div>}
        </div>
      </div>
      <div className=" sticky  bottom-[-20vw] -mx-6 lg:-mx-12 lg:-right-12 pointer-events-none h-0">
        <div style={{ background: 'linear-gradient(to bottom,transparent,#e1a0a9 20%)', position: 'absolute', bottom: '0', height: '26vw', left: 0, right: 0 }} />
        <Image src={bgBottom} priority placeholder='blur' className='w-full absolute bottom-0   max-w-none object-cover animate-fade' />
      </div>
    </>
  )
}