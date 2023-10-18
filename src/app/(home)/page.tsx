
"use client"
import Image from '@/components/common/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode, SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import bgImageMoble from '../../../public/mobile-bg.png';
import bgImage from './asset/bg.jpg';
import bite from './asset/bite-slide-1.png';
import events from './asset/events-slide.png';
import explore from './asset/explore-tag-1.png';
import qa from './asset/qa-slide.png';
import story from './asset/story-slide.png';
import travel from './asset/travel-slide.png';
import { menuItems } from './layout';
export const menuItemsL: {
  title: string,
  image: StaticImageData,
  href: string,
  style?: {
    [key: string]: string
  }
}[] = [
    {
      title: 'Story',
      image: story,
      href: '/story',
      style: {
        left: "50%",
        width: "11%",
        top: "48%",
      }
    },
    {
      title: 'Events',
      image: events,
      href: '/event',
      style: {
        left: "69%",
        width: "9%",
        top: "33%",
      }
    }, {
      title: 'Travel',
      image: travel,
      href: '/travel', style: {
        left: "65%",
        width: "21%",
        top: "76%",
      }
    },
    {
      title: 'Bites',
      image: bite,
      href: '/bites',
      style: {
        left: "16%",
        width: "11%",
        top: "8%",
      }
    },
    {
      title: 'Explore',
      image: explore,
      href: '/explore',
      style: {
        top: "58%",
        left: "11%",
        width: "8%"
      }
    },
    {
      title: 'Q&A',
      image: qa,
      href: '/qa',
      style: {
        left: "89%",
        width: "6%",
        top: "19%",
      }
    },
  ]
const total = 84

const Mark = ({ children, open }: { children: ReactNode, open: boolean }) => {
  const [number, setNumber] = useState(13)
  useEffect(() => {
    if (open) {
      let i = setInterval(() => {
        setNumber(number => {
          if (number >= total) {
            clearInterval(i)
            return total
          }
          return Math.min(number + 1, 84)
        })
      },)
      return () => {
        i && clearInterval(i)
      }
    }

  }, [open])
  useEffect(() => {
    if (!open) {
      let i = setInterval(() => {
        setNumber(number => {
          if (number <= 0) {
            clearInterval(i)
            return 0
          }
          return Math.max(number - 1, 13)
        })
      },)
      return () => {
        i && clearInterval(i)
      }
    }

  }, [open])
  return <>
    {useMemo(() => <style >{`
    .mark-3{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
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
      -webkit-mask-repeat-x: initial;
      -webkit-mask-repeat-y: initial;
      -webkit-mask-origin: initial;
      -webkit-mask-clip: initial;
      mask-size: 1500% 600%;
      -webkit-box-orient: vertical;
      -webkit-mask-size: 1500% 600%;
      -webkit-mask-image: url(/middle-240.webp);
      mask-image: url(/middle-240.webp);
      -webkit-mask-position: calc(${number % 15} / 14 * 100%) calc(${Math.floor(number / 15)} / 5 * 100%);
  
    }.mark-btn{
      position: absulute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-mask: url(data:image/png;base64,png=);
      -webkit-mask-image: url(data:image/png;base64,png=);
      -webkit-mask-position-x: initial;
      -webkit-mask-position-y: initial;
      -webkit-mask-repeat-x: initial;
      -webkit-mask-repeat-y: initial;
      -webkit-mask-origin: initial;
      -webkit-mask-clip: initial;
      mask-size: 1500% 600%;
      -webkit-box-orient: vertical;
      -webkit-mask-size: 1500% 600%;
      -webkit-mask-image: url(/middle-240.webp);
      mask-image: url(/middle-240.webp);
      -webkit-mask-position: calc(10 / 14 * 100%) calc(3 / 5 * 100%);
  
    }`}</style>, [number])}
    <div className={('fixed -z-10 inset-0 w-full h-full pointer-events-none bg-[#dc94aa]  transition-opacity duration-1000 ' + (open ? "opacity-100" : "opacity-0"))}></div>
    <div data-number={number} className="fixed inset-0 w-full h-full mark-3 pointer-events-none" >
      {children}
    </div>
  </>
}
let played = false
export default function Page() {
  const [src, setSrc] = useState('')
  const containerId = "containerId"
  const innerId = "innerId"
  const [end, setEnd] = useState(played ? true : false)
  const [sound, setSound] = useState(false)
  const videoref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (!src) return
    if (end) {
      played = true
      return () => {
        if (videoref.current?.currentTime && videoref.current.currentTime > 0)
          videoref.current.currentTime = 0
      }
    }

    let i = setInterval(() => {
      if (videoref.current?.currentTime === 0) {
        videoref.current?.play().then(() => { })
          .catch((error) => {
            console.error('1', videoref.current, error)
            console.log('1  videoref.current.muted ', videoref.current.muted)
            let timeout = setTimeout(() => {
              videoref.current?.play().then(() => { clearTimeout(timeout) }).catch((error) => {
                console.error('2', error)
                videoref.current.muted = true
                videoref.current?.play()
              })
            }, 1000)
          });
        i && clearInterval(i)
      }
    }, 300)
    return () => {
      i && clearInterval(i)
    }
  }, [end, src])
  useEffect(() => {
    if (videoref.current?.muted !== undefined) {
      if (sound) {
        videoref.current.muted = false
      } else {
        videoref.current.muted = true
      }
    }
  }, [sound])
  useEffect(() => {
    if (window.innerWidth < 1025) {
      setSrc('https://res.cloudinary.com/dfgbpib38/video/upload/v1697439010/AnJoel/twuqvb2eqw2aw7o37gse.mp4')
    } else {
      setSrc('https://res.cloudinary.com/dfgbpib38/video/upload/f_auto:video,q_auto/AnJoel/cudmqrtwawefjlrgova4')
    }
  }, [sound])
  return (
    <div className='fixed inset-0 w-full h-full flex flex-col justify-center'>

      {src && <video
        src={src}
        ref={videoref} onTimeUpdate={(e: SyntheticEvent<HTMLVideoElement, Event>) => {
          if (e.currentTarget.currentTime > 6) {
            if (e.currentTarget.style.opacity === '1') {
              e.currentTarget.style.opacity = '0'
              e.currentTarget.style.filter = 'blur(10px)'
            }
          } else {
            if (e.currentTarget.style.filter === 'blur(10px)') {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.filter = 'blur(0px)'
            }
          }
        }} style={{ filter: 'blur(10px)', opacity: '0' }} webkit-playsinline="true" playsInline onEnded={e => {
          setEnd(true)
        }} controls={false} muted className="fixed  inset-0 w-full h-full transition-all lg:block duration-[2s] ease-in-out  max-w-full object-cover pointer-events-auto"
      >
      </video>}
      <div style={end ? { opacity: 1, display: "flex" } : { opacity: 0, display: 'none' }} className=" w-full  delay-[2s] duration-[2s] text-[12px] lg:text-lg text-[#1a1a1a] flex flex-col gap-6 relative  isolate ">
        <Image src={bgImageMoble} priority placeholder='blur' className=' -z-10 lg:hidden inset-0 fixed w-full h-full max-w-full object-cover animate-fade' />
        <ul className='justify-center max-[calc(100vh-320px)] w-full animate-fade origin-top-right duration-300 text-center min-h-[calc(100vh-320px)] flex-col   isolate  z-10 top-0 left-0 flex items-center  lg:hidden'>
          {
            menuItems.map((item, index) => {
              if (item.href === '/') {
                return null
              }
              return <li key={index} style={{
                animationDelay: `${300 + (index + 1) * 100}ms`
              }} className='flex w-full flex-1 flex-col  animate-fade-up  items-center gap-2 relative max-w-[200px] lg:max-w-xs'>
                <Link href={item.href} className='justify-center group transform hover:scale-x-125 flex items-center duration-500  ease-in-out  absolute inset-0  h-full '>
                  {/* <Image width={200} height={200} src={item.image} alt={item.title} className='object-cover transition-transform group-hover:scale-110 absolute inset-0 w-full h-full ' /> */}
                  <div className='mt-[0.5em] font-header text-[8vw] font-extrabold'>{item.title}</div>
                </Link>
              </li>
            })}
        </ul>
        <div id={containerId} className='overflow-hidden  mx-auto flex flex-col relative justify-center items-center lg:relative '>
          <div id={innerId} className='transition-transform w-full duration-300 ease-in-out'>
            <Image src={bgImage} priority placeholder='blur' className='hidden transition-transform lg:block -z-10 inset-0 w-full  max-w-full object-cover animate-fade' />
            <ul className='hidden lg:block absolute inset-0 w-full h-full'>
              {
                menuItemsL.map((item, index) => {
                  return <li key={index} >
                    <Link href={item.href} style={item.style} id={item.title} className='absolute transform transition-transform ease-in-out hover:scale-110'>
                      <Image style={{
                        animationDelay: `${1000 + (index + 1) * 150}ms`
                      }} width={200} height={200} src={item.image} alt={item.title} className='object-cover w-full absolute opacity-0 animate-fade-up hover:scale-110 duration-500  ease-in-out  transition-transform' />
                      <div className='text-2xl font-semibold w-full uppercase hidden'>{item.title}</div>
                    </Link>
                  </li>
                })}
            </ul>
          </div>
          {/* <div className="absolute inset-0 hidden lg:block w-full h-full pointer-events-none" style={{ boxShadow: 'inset 0px 0px 16px 16px #C788B0, inset 0px 0px 33px 27px #C788B0' }} /> */}
        </div>
        {/* <AnimatedImage containerId={containerId} innerId={innerId} /> */}
      </div>
      <div className='fixed bottom-0 w-full h-[140px] flex justify-center gap-6  pointer-events-none items-center px-6 lg:px-12 '>
        <div className=' flex gap-6 container '>
          <button onClick={e => { setSound(sound => !sound) }} className='text-[40px] border-2 border-white border-opacity-30 rounded-full backdrop-blur-2xl bg-white bg-opacity-0  pointer-events-auto relative lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]  flex justify-center items-center'>
            {sound ? <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M333.782 80c128 64 128 288 0 352 192-64 192-288 0-352zm-48 16c64 50.843 64 270.217 0 321.06 128-50.843 128-270.217 0-321.06zm-75.13 49.922c-35.468.215-70.268 6.618-89.253 14.863-14.084 43.136-16.33 127.919-6.736 180.518-8.452-4.265-18.337-6.543-28.445-6.555-28.719 0-52 17.909-52 40s23.281 40 52 40 52-17.909 52-40c-6.166-49.187-13.74-115.12-8.225-165.437 37.756-7.722 77.49-17.422 114.688-10.715-4.152 38.294-3.029 82.424 3.379 117.552-8.452-4.265-18.337-6.543-28.446-6.554-28.719 0-52 17.908-52 40 0 22.091 23.281 40 52 40 28.72 0 52-17.909 52-40-4.618-72.485-18.78-132.767.33-196.436-18.491-5.267-40.012-7.365-61.293-7.236zm5.456 15.635c11.697-.073 23.313.706 34.174 2.558-1.185 5.199-2.232 10.67-3.156 16.336-37.913-5.64-78.578 1.385-114.332 9.656a227.233 227.233 0 0 1 3.277-14.884c19.722-7.718 50.145-13.48 80.037-13.666z" /></svg>
              : <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M210.652 145.922c-35.467.215-70.267 6.618-89.252 14.863-14.085 43.136-16.33 127.919-6.736 180.518-8.452-4.265-18.339-6.543-28.447-6.555-28.719 0-52 17.909-52 40s23.281 40 52 40 52.002-17.909 52.002-40c-6.166-49.187-13.74-115.12-8.225-165.437 37.756-7.722 77.49-17.422 114.688-10.715-4.152 38.294-3.03 82.424 3.377 117.552-8.452-4.265-18.335-6.543-28.444-6.554-28.719 0-52 17.908-52 40 0 22.091 23.281 40 52 40s52-17.909 52-40c-4.618-72.485-18.78-132.767.33-196.436-18.492-5.267-40.012-7.365-61.293-7.236zm5.457 15.635c11.697-.073 23.313.706 34.174 2.558-1.185 5.199-2.232 10.67-3.156 16.336-37.913-5.64-78.578 1.385-114.332 9.656a227.233 227.233 0 0 1 3.277-14.884c19.722-7.718 50.145-13.48 80.037-13.666zm116.62 17.714L307.27 204.73 358.543 256l-51.272 51.271 25.458 25.458L384 281.457l51.271 51.272 25.458-25.458L409.457 256l51.272-51.271-25.458-25.458L384 230.543l-51.271-51.272z" /></svg>}
          </button>
          <button onClick={e => {
            setEnd(end => !end)
          }} className='text-[40px] border-2 border-white border-opacity-30 rounded-full backdrop-blur-2xl bg-white bg-opacity-0  pointer-events-auto relative lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]  flex justify-center items-center'>
            {end ? <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" /></svg>
              : <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" /></svg>}
          </button>
        </div>
      </div>
    </div>

  )
}