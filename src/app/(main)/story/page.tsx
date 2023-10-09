"use client"
import Image from "@/components/common/image";
import Story from "@/components/template/story-next";
import { useSource } from "@/libs/source";
import { useEffect, useState } from "react";
import right from './_assets/AJ-web-02.png';
import left from './_assets/AJ-web-03 (1).png';
import bgImage from './_assets/bites-bg.png';
export default function Page() {
  const source = useSource()
  const [topOffset, setTopOffset] = useState(0)
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setTopOffset(window.scrollY)
      setOpacity(Math.min(1, Math.min(0, window.scrollY - 300) / 500))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const hideBanner = topOffset > 300
  console.log({ opacity })

  return (
    <div className="isolate relative w-full">
      <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover animate-fade -z-10 ' />
      <div className="transition-opacity min-h-[calc(100vh-126px)] pointer-events-none ease-in-out duration-500 isolate container mx-auto lg:gap-16 w-full z-10">
        <div className="w-full absolute left-0 right-0 top-[8vw]  flex justify-center items-center ">
          <div className="max-w-[40ch] w-[45vw] text-[2vw] leading-relaxed mx-auto text-lg text-center px-10 lg:px-12">
            An & Joel have tried & loved almost all of the restaurants above. Hopefully, their food suggestions will help you explore Vietnamese cuisine in a more diverse way!
          </div>
        </div>
      </div >
      <div className="w-full sticky -z-10">
        <Image src={right} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover animate-fade' />
        <Image src={left} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover animate-fade' />
      </div>
      <div className="transition-all duration-[3s] ease-in-out isolate">
        <div className="-z-10 relative mx-auto max-w-[65ch]">
          <Story />
        </div>
      </div>
    </div>
  )
}
