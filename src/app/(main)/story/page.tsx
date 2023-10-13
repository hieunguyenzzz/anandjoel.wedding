"use client"
import Image from "@/components/common/image";
import Story from "@/components/template/story-next";
import clsx from 'clsx';
import { ReactNode, useEffect, useMemo, useState } from "react";
import right from './_assets/AJ-web-02.png';
import left from './_assets/AJ-web-03 (1).png';
import bgImage from './_assets/bites-bg.png';
const total = 84

const Mark = ({ children, id, className }: { children: ReactNode, id: string, className?: string }) => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let height = window.innerHeight / 2
      console.log('scroll', window.scrollY, Math.floor((Math.max(height - window.scrollY, 0) / height * total)))
      setNumber(total - Math.floor((Math.max(height - window.scrollY, 0) / height * total)))
    });
  }, []);
  return <>
    {useMemo(() => <style >{`
  #mark-${id}{
    background-size: cover;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-mask: url(data:image/png;base64,png=);
    -webkit-mask-image: url(data:image/png;base64,png=);
    -webkit-mask-position-x: initial;
    -webkit-mask-position-y: initial;
    -webkit-mask-size: initial;
    -webkit-mask-repeat-x: initial;
    -webkit-mask-repeat-y: initial;
    -webkit-mask-origin: initial;
    -webkit-mask-clip: initial;
    -webkit-mask-size: 1500% 600%;
    mask-size: 1500% 600%;
    -webkit-box-orient: vertical;
    -webkit-mask-size: 1500% 600%;
    -webkit-mask-image: url(/middle-240.webp);
    mask-image: url(/middle-240.webp);
    -webkit-mask-position: calc(${number % 15} / 14 * 100%) calc(${Math.floor(number / 15)} / 5 * 100%);
  }`}</style>, [number])}
    <div id={`mark-${id}`} className={className + " pointer-events-none"} >
      {children}
    </div >
  </>
}
export default function Page() {

  const [open, setOpen] = useState(false)
  return (
    <>
      <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover animate-fade ' />
      <div className={clsx("isolate  fixed inset-0 h-full  w-full z-20 flex items-center")}>
        <div className="pointer-events-none">
          <Image src={right} priority placeholder='blur' className='absolute top-0 w-1/2  md:w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
          <Image src={left} priority placeholder='blur' className='absolute  top-0 w-1/2 md:w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
        </div>

      </div>
      <div className="transition-all z-30 relative duration-[3s] w-full ease-in-out isolate mx-auto">
        <div className="z-10 relative mx-auto max-w-[65ch] ">
          <div className="w-full h-full  flex flex-col relative pt-[100px]  md:pt-[20vw]  gap-24 ">
            <div className="max-w-[40ch] tracking-normal  font-thin text-xl  md:text-[2vw] xl:text-[1.8vw] leading-relaxed mx-auto text-center px-14">
              An & Joel do not have a typical love Story
              <div className="whitespace-pre-wrap">
                <span className="italic tracking-tight">but everything that happens has its own reason</span>
                {'\n '}to create an <span className="italic tracking-tight">inspired love</span>
              </div>
            </div>
          </div>

          <Mark id={'bg'} className="fixed inset-0 w-full h-full" ><div className="pointer-events-none fixed inset-0 ">
            <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover  -z-10 ' />
            <Image src={right} priority placeholder='blur' className='absolute transform translate-y-[max(-70vw,-100vh)] top-0  w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
            <Image src={left} priority placeholder='blur' className='absolute transform translate-y-[max(-70vw,-100vh)] top-0 w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
          </div></Mark>
          <Mark id={'content'} className="mt-[50vh]">
            <>
              <div className="">
                <h2 onClick={e => {
                  document.querySelector("#mark-content")?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }} className=" animate-fade-up animate-delay-700 font-header text-4xl lg:text-6xl font-bold text-center block my-12 lg:my-24">HOW IT ALL BEGAN</h2>
              </div>
              <div className=" animate-fade-up animate-delay-[800ms] pointer-events-auto">
                <Story />
              </div>
            </>
          </Mark>

        </div>
      </div >
    </>

  )
}
