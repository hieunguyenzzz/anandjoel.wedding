"use client"
import Image from "@/components/common/image";
import Story from "@/components/template/story-next";
import clsx from 'clsx';
import { ReactNode, useEffect, useMemo, useState } from "react";
import right from './_assets/AJ-web-02.png';
import left from './_assets/AJ-web-03 (1).png';
import bgImage from './_assets/bites-bg.png';
const total = 84

const Mark = ({ children, open }: { children: ReactNode, open: boolean }) => {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    if (open) {
      let i = setInterval(() => {
        setNumber(number => {
          if (number > total) {
            clearInterval(i)
            return total
          }
          return number + 14
        })
      }, 50)
      return () => {
        i && clearInterval(i)
      }
    }

  }, [open])
  useEffect(() => {
    if (!open) {
      let i = setInterval(() => {
        setNumber(number => {
          if (number < 0) {
            clearInterval(i)
            return 0
          }
          return Math.max(0, number - 1)
        })
      }, 100)
      return () => {
        i && clearInterval(i)
      }
    }

  }, [open])
  return <>
    {useMemo(() => <style >{`
  .mark-1{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 36px;
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
    -webkit-mask-position: calc(${Math.floor(number / total * 14)} / 14 * 100%) calc(${Math.floor(number / total * 5)} / 5 * 100%);

  }`}</style>, [Math.floor(number / total * 14), Math.floor(number / total * 5)])}
    <div data-number={number} className="fixed inset-0 w-full h-full mark-1 pointer-events-none backdrop-blur bg-opacity-1" >
      {children}
    </div>
  </>
}
export default function Page() {

  const [open, setOpen] = useState(false)
  return (
    <>
      <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover animate-fade ' />

      <div className={clsx("isolate  fixed inset-0 h-full  w-full z-20 flex items-center")}>
        <div className="pointer-events-none">
          <Image src={right} priority placeholder='blur' className='absolute top-0  w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
          <Image src={left} priority placeholder='blur' className='absolute  top-0 w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
        </div>
        <div className="w-full h-full  flex flex-col relative  pt-[90vw] sm:pt-[20vw]  gap-24 ">
          <div className="max-w-[40ch]  text-xl md:text-[2vw] xl:text-[1.8vw] leading-relaxed mx-auto text-center px-14">
            An & Joel have tried & loved almost all of the restaurants above. Hopefully, their food suggestions will help you explore Vietnamese cuisine in a more diverse way!
          </div>
          <button onClick={() => setOpen(true)} className=" font-header text-4xl lg:text-[4vw] font-bold text-center block">HOW IT BEGIN</button>
        </div>
      </div>
      {open && <div className="transition-all z-30 relative duration-[3s] ease-in-out isolate ">
        <Mark open={open}>{<Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover  -z-10 ' />}</Mark>
        <div className="pointer-events-none fixed inset-0 transform translate-y-[max(-70vw,-100vh)]">
          <Image src={right} priority placeholder='blur' className='absolute top-0  w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
          <Image src={left} priority placeholder='blur' className='absolute  top-0 w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
        </div>
        <div className="z-10 relative mx-auto max-w-[65ch] px-6">
          <div>
            <h2 className=" animate-fade-up animate-delay-300 font-header text-4xl lg:text-6xl font-bold text-center block my-12 lg:my-24">HOW IT BEGIN</h2></div>
          <div className=" animate-fade-up animate-delay-500">
            <Story />
          </div>
        </div>
      </div >}
    </>

  )
}
