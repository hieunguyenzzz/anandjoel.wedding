"use client"
import Image from "@/components/common/image";
import clsx from 'clsx';
import { ReactNode, useEffect, useMemo, useState } from "react";
import right from '../_assets/AJ-web-02.png';
import left from '../_assets/AJ-web-03 (1).png';
import bgImage from '../_assets/bites-bg.png';
import { useEvent } from "@/libs/source";
const total = 84

const Mark = ({ children, id, className }: { children: ReactNode, id: string, className?: string }) => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setNumber(total)
    } else {
      window.addEventListener("scroll", (e) => {
        let height = window.innerHeight / 2
        // console.log('scroll', window.scrollY, Math.floor((Math.max(height - window.scrollY, 0) / height * total)))
        setNumber(total - Math.floor((Math.max(height - window.scrollY, 0) / height * total)))
      });
    }

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
  let event = useEvent()
  console.log({event})
  return (
    <>
      <div className={clsx("isolate invisible md:visible fixed inset-0 h-full  w-full z-20 flex items-center")}>
        <div className="pointer-events-none">
          <Image src={right} priority placeholder='blur' className='absolute top-[136px] md:top-0 w-1/2  md:w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
          <Image src={left} priority placeholder='blur' className='absolute top-[136px] md:top-0 w-1/2 md:w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
        </div>
      </div>
      <div className="transition-all z-30 relative duration-[3s] w-full ease-in-out isolate mx-auto">
        <div className="z-10 relative mx-auto max-w-[65ch] ">
          <div className="w-full h-full hidden md:flex  flex-col relative pt-[100px] justify-center items-center md:pt-[10vw]  gap-24 ">
            <div className="max-w-[50vw] relative w-full aspect-video">
             <video controls muted autoPlay src="https://res.cloudinary.com/dfgbpib38/video/upload/f_auto:video,q_auto/AnJoel/cudmqrtwawefjlrgova4" className="absolute inset-0 w-full h-full/"></video>
            </div>
          </div>
          <Mark id={'bg'} className="fixed inset-0 w-full h-full" ><div className="pointer-events-none fixed inset-0 ">
            <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover  -z-10 ' />
            <Image src={right} priority placeholder='blur' className='absolute transform translate-y-[max(-70vw,-100vh)] top-0  w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
            <Image src={left} priority placeholder='blur' className='absolute transform translate-y-[max(-70vw,-100vh)] top-0 w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
          </div></Mark>
          <Mark id={'content'} className="mt-6 md:mt-[50vh]">
            <>
              <div className=" animate-fade-up animate-delay-[800ms] pointer-events-auto">
              </div>
            </>
          </Mark>
        </div>
      </div >
    </>

  )
}
