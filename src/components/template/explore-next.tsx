"use client";
import { useSource } from '@/libs/source';
import { Field } from '@/libs/tina';
import { unstable_getImgProps } from 'next/image';
import { useState } from 'react';
import 'react-image-lightbox/style.css';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Vietnammap from '../../../public/vietmap.png';
import { PageBlocksExplore } from '../../../tina/__generated__/types';
import Image from '../common/image';


const Content = ({ id, setid, data, blockIndex }: { id: number, setid: (n: number) => void, data: PageBlocksExplore, blockIndex: number }) => {
  const currentItem = data?.item?.find((item, index) => index === id)
  if (!currentItem) return <section className="mt-12 mx-auto px-4  md:px-8">
    <div className="max-w-lg">
      <h1 className="text-[1.4em] font-title text-gray-800 font-semibold mt-2">
        {data?.title || "Explore Vietnam"}
      </h1>
      <p className="mt-3 ">
        {data?.description || `Blogs that are loved by the community. Updated every hour.
      The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015`}
      </p>
    </div>
    <div className="grid xl:grid-cols-2 2xl:grid-cols-3 mt-6 gap-6" id="galleryID">
      {
        data?.item?.map((item, index) => {
          const title = item?.title || ''
          const id = index
          return <Field key={index} name={`blocks.${blockIndex}.item.${index}.title`}>
            <div className='galleryID-item w-full h-full  pt-[100%] lg:pt-[100%] relative '>
              <Image width={300} height={300} src={item?.image || ""} alt={title || ''} className='object-cover w-full h-full absolute inset-0  rounded-lg bg-[#e9a48a52] border-[#e9a48a52] border-8' />
              <button onClick={() => setid(id)} className="absolute left-0 cursor-pointer top-0 h-full w-full flex justify-center items-center text-center  text-magical">
                <div className="bg-white p-[0.5em_0.5em_0.5em_0.5em] relative">
                  <div className="flex ">
                    <svg className="absolute top-0 right-[100%] h-full text-white" fill="white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.1 28" xmlSpace="preserve" ><polygon className="st0" points="1.9,0 0,2.3 1.3,4.8 1.6,6.6 2.2,7.7 3.7,9.5 3.2,9.8 3.7,10.9 3.7,11.8 3.4,12.8 2.6,13.7 3.2,14.8
            3.7,15.8 3.3,16.5 2.8,17.1 1.5,19.2 2.7,20.5 3.5,23.1 2.7,24.4 1.8,26.4 1.8,26.8 2.5,27.3 3.4,27.5 4.2,28 14.1,28 14.1,0 " /></svg>
                    <svg className="absolute top-0 left-[100%] h-full text-white" fill="white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 11.5 28" xmlSpace="preserve" ><polygon className="st0" points="9.1,0 9.3,1.1 9.7,1.9 9.7,2.3 9.9,2.7 9.9,3.3 10.1,4 10.1,4.7 10.1,5.3 9.6,5.7 9.9,6.3 10.1,6.8
            10.7,7.3 10.7,7.6 10.6,7.9 10.7,8.9 10.7,9.5 11.5,10.6 11.2,11 11.5,11.2 10.9,11.8 10.5,12.5 10.7,12.7 11,12.7 11.1,12.9
            10.6,14.1 9.9,15 8.2,16.7 8.8,17.2 8.4,18 8.8,18.8 8.7,19.6 8.8,20.5 8.7,20.9 8.7,21.3 9.2,21.8 8.7,22.6 8.8,23 8.8,23.2
            9,23.4 8.6,23.7 8.4,24.4 8.4,24.9 7.9,25.2 7.6,26.1 7.9,26.8 8.5,27.6 6.9,28 0,28 0,0 " /></svg>
                    <div className='flex flex-col items-center text-center'>
                      <h3 className="font-bold text-lg font-title text-magical-item leading-[1.2]">{title}</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </Field>
        })
      }

    </div>
  </section>
  return (
    <section className="mt-12 mx-auto px-4  md:px-8">
      <div key={currentItem?.title} className="prose">
        {currentItem && <button className='underline animate-fade-up animate-duration-500 animate-ease-in-out' onClick={() => setid(-1)}>Back</button>}
        <h1 className="text-3xl font-title text-gray-800 animate-fade-up animate-delay-100 font-semibold mt-2 animate-duration-500 animate-ease-in-out">
          {currentItem?.title}
        </h1>
        <p className="mt-3  animate-fade-up animate-delay-200 animate-duration-500 animate-ease-in-out">
          {currentItem?.description}
        </p>
      </div>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 mt-6 gap-6" id="galleryID">
        {
          currentItem && currentItem.gallery?.filter(Boolean).map((i, index) => {
            const item = i?.image
            const content = i?.content
            const popupId = `my_modal_${index}`
            const img = unstable_getImgProps({
              width: 1440,
              height: 1440,
              src: item,
              alt: ""
            })

            return <div className='group relative' href={img.props.src} key={index + 1} >
              <Field key={index + 1} name={`blocks.${blockIndex}.item.${index}.title`}>
                <div onClick={() => {
                  window?.[popupId].showModal()
                }} className='w-full h-full  pt-[100%] lg:pt-[100%] relative '>
                  <Image width={600} height={600} src={img.props.src} alt={currentItem.title || ''} className='object-cover w-full h-full animate-fade-up absolute inset-0 rounded-lg bg-[#e9a48a52] border-[#e9a48a52] border-8' />
                </div>
              </Field>
              <div className='opacity-0 p-6 flex justify-center items-center invisible transition-all absolute inset-0 bg-white backdrop-blur-sm bg-opacity-40 group-hover:visible group-hover:opacity-100'><div className='prose'>
                {content && <TinaMarkdown content={content} />}
              </div></div>
            </div>
          })
        }
      </div>
    </section>
  )
}


export default function ExploreNext() {
  const source = useSource()
  const blockIndex = source?.blocks?.findIndex((item: any) => item?.__typename === 'PageBlocksExplore')
  const data = (blockIndex && source?.blocks?.[blockIndex]) as PageBlocksExplore
  console.log({ data })
  const locations = (data?.item || []).map(item => item?.location).filter(Boolean)
  const [id, setid] = useState(-1)
  const currentItem = data?.item?.find((item, index) => index === id)
  return <>
    <div className='flex isolate '>
      <div className='fixed -z-10 inset-0 w-full h-full max-w-full object-cover animate-fade bg-[#cba8bb] pointer-events-none' ></div>
      <div className='fixed -z-10 left-0 top-0 h-screen w-[50%]'>
        <Image src={Vietnammap} fill />
      </div>
      <div className='sticky  hidden md:flex top-[130px] h-[calc(100vh-126px)]  items-center justify-center w-[800px] md:max-w-[40vw]'>
        <div className='w-full flex-shrink-0'>

        </div>
      </div>
      <div className='container flex-1'>
        <Content {...{ id, setid, blockIndex, data }} />
      </div>
    </div>
  </>
}