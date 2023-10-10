"use client"
import Image from "@/components/common/image";
import Story from "@/components/template/story-next";
import { useEffect, useState } from "react";
import right from './_assets/AJ-web-02.png';
import left from './_assets/AJ-web-03 (1).png';
import bgImage from './_assets/bites-bg.png';
export default function Page() {
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
  const [open, setOpen] = useState(false)
  return (
    <>
      <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover animate-fade -z-10 ' />


      <div className="isolate  fixed inset-0 h-full  w-full z-20 flex items-center">
        <div className="pointer-events-none">
          <Image src={right} priority placeholder='blur' className='absolute top-0  w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
          <Image src={left} priority placeholder='blur' className='absolute  top-0 w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
        </div>
        <div className="w-full h-full  flex flex-col relative  pt-[90vw] sm:pt-[20vw]  gap-24 ">
          <div className="max-w-[40ch]  text-xl lg:text-[1.5vw] leading-relaxed mx-auto text-center px-14">
            An & Joel have tried & loved almost all of the restaurants above. Hopefully, their food suggestions will help you explore Vietnamese cuisine in a more diverse way!
          </div>
          <button className=" font-header text-4xl font-bold text-center block">HOW IT BEGIN</button>
        </div>

        {open && <div className="transition-all duration-[3s] ease-in-out isolate">
          <div className="-z-10 relative mx-auto max-w-[65ch]">
            <Story />
          </div>
        </div>}
      </div>
    </>

  )
}
