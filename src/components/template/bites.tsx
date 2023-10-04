"use client"
import Image from "@/components/common/image";
import { useSource } from "@/libs/source";
import { Field } from "@/libs/tina";
import React, { useState } from "react";
import bgImage from '../../../public/qa_bg.png';
import Bitenext from "./bites-detail-next";
export default function Bites() {
  const [id, setid] = useState(-1)
  const source = useSource()
  const data = source?.blocks?.find((item: any) => item?.__typename === 'PageBlocksBites')
  return (
    <>
      <Image src={bgImage} priority placeholder='blur' className='fixed  inset-0 w-full h-full max-w-full object-cover animate-fade' />
      <div className="grid py-12 lg:grid-cols-2 xl:grid-cols-4 gap-3 isolate container mx-auto lg:gap-8">
        {
          data?.item?.map((item, index) => {
            const title = item?.title || ''
            const description = item?.description || ''
            const id = index
            const images = item.gallery?.map(i => i?.image || "").filter(Boolean)
            console.log({ item })
            if (item?.variant === "Two") {
              return <React.Fragment key={index}>
                <div className="col-span-full first:hidden"></div>
                <Field className='lg:col-span-2' name={`blocks.0.item.${index}.title`}>
                  <div className='w-full h-full pt-[40%]  relative '>
                    {/* {item?.image && <Image width={400} height={400} src={item?.image} alt={title || ''} className='object-cover absolute inset-0 h-full w-full rounded-lg bg-[#e9a48a52] border-[#e9a48a52] border-8' />} */}
                    <button onClick={() => setid(id)} className="absolute left-0 top-0 h-full w-full flex justify-center items-center text-center  text-magical">
                      <div className="bg-white p-[0.7em_0.5em_0.5em_0.5em] relative">
                        <div className="flex ">
                          <svg className="absolute top-0 right-[100%] h-full text-white" fill="white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.1 28" xmlSpace="preserve" ><polygon className="st0" points="1.9,0 0,2.3 1.3,4.8 1.6,6.6 2.2,7.7 3.7,9.5 3.2,9.8 3.7,10.9 3.7,11.8 3.4,12.8 2.6,13.7 3.2,14.8
                    3.7,15.8 3.3,16.5 2.8,17.1 1.5,19.2 2.7,20.5 3.5,23.1 2.7,24.4 1.8,26.4 1.8,26.8 2.5,27.3 3.4,27.5 4.2,28 14.1,28 14.1,0 " /></svg>
                          <svg className="absolute top-0 left-[100%] h-full text-white" fill="white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 11.5 28" xmlSpace="preserve" ><polygon className="st0" points="9.1,0 9.3,1.1 9.7,1.9 9.7,2.3 9.9,2.7 9.9,3.3 10.1,4 10.1,4.7 10.1,5.3 9.6,5.7 9.9,6.3 10.1,6.8
                    10.7,7.3 10.7,7.6 10.6,7.9 10.7,8.9 10.7,9.5 11.5,10.6 11.2,11 11.5,11.2 10.9,11.8 10.5,12.5 10.7,12.7 11,12.7 11.1,12.9
                    10.6,14.1 9.9,15 8.2,16.7 8.8,17.2 8.4,18 8.8,18.8 8.7,19.6 8.8,20.5 8.7,20.9 8.7,21.3 9.2,21.8 8.7,22.6 8.8,23 8.8,23.2
                    9,23.4 8.6,23.7 8.4,24.4 8.4,24.9 7.9,25.2 7.6,26.1 7.9,26.8 8.5,27.6 6.9,28 0,28 0,0 " /></svg>
                          <div>
                            <div className="font-subtitle text-[0.8em] text-gray-400">{description}</div>
                            <h3 className="font-bold text-[2em] font-title uppercase text-magical-item leading-[1.2]">{title}</h3>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </Field>
              </React.Fragment>
            }
            return <Field key={index} name={`blocks.0.item.${index}.title`}>
              <div className='w-full pt-[140%] h-full   relative group'>
                <Image src={item?.image} width={400} height={400} alt={title || ''} className='object-cover  h-full w-full absolute inset-0' />
                <button onClick={() => setid(id)} className="absolute  bg-black bg-opacity-30  text-left group-hover:backdrop-blur-sm  transition-all duration-500 ease-in-out group-hover:bg-black group-hover:bg-opacity-50 left-0 top-0 h-full w-full flex justify-start items-end text-magical ">
                  <div className=" text-white flex items-center   p-[1em_1.5em_2em_1.5em] relative">
                    <div className=" items-start ">
                      <h3 className="font-bold text-[1.2em] font-title uppercase text-magical-item leading-[1.2] inline">{title}</h3>
                      <div className="font-subtitle flex items-center gap-2 italic text-[0.8em]">
                        {description}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </Field >
          })
        }
        <Bitenext key={id} id={id} onClose={() => setid(-1)} />
      </div >
    </>

  )
}
