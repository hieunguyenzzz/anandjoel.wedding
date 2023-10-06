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
      setTopOffset(Math.min(window.scrollY, window.innerHeight))
      setOpacity(Math.min(1, Math.min(0, window.scrollY - 300) / 500))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const hideBanner = topOffset > 300
  console.log({ opacity })
  return (
    <div className="isolate relative">
      <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover animate-fade -z-10 ' />
      <div style={{ top: -topOffset }} className="pointer-events-none fixed inset-0 w-full h-full transition-all duration-100">
        <Image src={right} priority placeholder='blur' className='absolute object-top inset-0 w-full  h-auto max-w-full pointer-events-none object-cover animate-fade' />
        <Image src={left} priority placeholder='blur' className='absolute object-top inset-0 w-full  h-auto max-w-full pointer-events-none object-cover animate-fade' />
      </div>
      <div className="transition-opacity  pt-[58vw]  pointer-events-none ease-in-out duration-500 isolate container mx-auto lg:gap-16 w-full relative">
        <div className="w-full absolute inset-0 flex justify-center items-center ">
          <div className="max-w-[40ch] w-full leading-relaxed mx-auto text-lg lg:text-[2rem] text-center px-10 lg:px-12">
            An & Joel have tried & loved almost all of the restaurants above. Hopefully, their food suggestions will help you explore Vietnamese cuisine in a more diverse way!
          </div>
        </div>
      </div >
      <div className="transition-all duration-[3s] ease-in-out isolate -z-10 relative">
        <div className="-z-10 relative mx-auto px-[10vw] max-w-[65ch]">
          <Story />
        </div>
      </div>
    </div>
  )
}
