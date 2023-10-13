
"use client"
import AnimatedImage from '@/components/animateImage';
import Image from '@/components/common/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode, SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import bgImage from '../../../public/main-page-update.png';
import bgImageMoble from '../../../public/mobile-bg.png';
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
        left: "51%",
        width: "9%",
        top: "55%",
      }
    },
    {
      title: 'Events',
      image: events,
      href: '/event',
      style: {
        left: "66%",
        width: "8%",
        top: "42%",
      }
    }, {
      title: 'Travel',
      image: travel,
      href: '/travel', style: {
        left: "63%",
        width: "17%",
        top: "79%",
      }
    },
    {
      title: 'Bites',
      image: bite,
      href: '/bites',
      style: {
        left: "23.5%",
        width: "9%",
        top: "21%",
      }
    },
    {
      title: 'Explore',
      image: explore,
      href: '/explore',
      style: {
        top: "63%",
        left: "19%",
        width: "7%"
      }
    },
    {
      title: 'Q&A',
      image: qa,
      href: '/qa',
      style: {
        left: "82%",
        width: "6%",
        top: "3%",
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
  
    }`}</style>, [number])}
    <div className={('fixed -z-10 inset-0 w-full h-full pointer-events-none bg-[#dc94aa]  transition-opacity duration-1000 ' + (open ? "opacity-100" : "opacity-0"))}></div>
    <div data-number={number} className="fixed inset-0 w-full h-full mark-3 pointer-events-none" >
      {children}
    </div>
  </>
}

export default function Page() {
  const containerId = "containerId"
  const innerId = "innerId"
  const [end, setEnd] = useState(false)
  const videoref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
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
  }, [])
  return (
    <div className='fixed inset-0 w-full h-full flex flex-col justify-center'>
      <div style={end ? { opacity: 1, display: "flex" } : { opacity: 0, display: 'none' }} className=" w-full delay-[2s] duration-[2s] text-[12px] lg:text-lg text-[#1a1a1a] flex flex-col gap-6 relative  isolate ">
        <Image src={bgImageMoble} priority placeholder='blur' className=' -z-10 lg:hidden inset-0 fixed w-full h-full max-w-full object-cover animate-fade' />
        <ul className='justify-center w-full animate-fade origin-top-right duration-300 text-center min-h-[calc(100vh-280px)] flex-col   isolate  z-10 top-0 left-0 flex items-center  lg:hidden'>
          {
            menuItems.map((item, index) => {
              if (item.href === '/') {
                return null
              }
              return <li key={index} style={{
                animationDelay: `${300 + (index + 1) * 100}ms`
              }} className='flex w-full flex-1 flex-col  animate-fade-up  items-center gap-2 relative max-w-[200px] lg:max-w-xs'>
                <Link href={item.href} className='justify-center group flex items-center duration-500  ease-in-out  absolute inset-0  h-full '>
                  {/* <Image width={200} height={200} src={item.image} alt={item.title} className='object-cover transition-transform group-hover:scale-110 absolute inset-0 w-full h-full ' /> */}
                  <div className='mt-[0.5em] font-header text-[8vw] font-extrabold'>{item.title}</div>
                </Link>
              </li>
            })}
        </ul>
        <div id={containerId} className='overflow-hidden  mx-auto flex flex-col relative justify-center items-center lg:relative '>
          <div id={innerId} className='transition-transform duration-300 ease-in-out'>
            <Image src={bgImage} priority placeholder='blur' className='hidden transition-transform lg:block -z-10 inset-0 w-full  max-w-full object-cover animate-fade' />
            <ul className='hidden lg:block absolute inset-0 w-full h-full'>
              {
                menuItemsL.map((item, index) => {
                  return <li key={index} >
                    <Link href={item.href} style={item.style} id={item.title} className='absolute '>
                      <Image style={{
                        animationDelay: `${300 + (index + 1) * 150}ms`
                      }} width={200} height={200} src={item.image} alt={item.title} className='object-cover w-full absolute opacity-0 animate-fade-up hover:scale-110 duration-500  ease-in-out  transition-transform' />
                      <div className='text-2xl font-semibold w-full uppercase hidden'>{item.title}</div>
                    </Link>
                  </li>
                })}
            </ul>
          </div>
          <div className="absolute inset-0 hidden lg:block w-full h-full pointer-events-none" style={{ boxShadow: 'inset 0px 0px 16px 16px #C788B0, inset 0px 0px 33px 27px #C788B0' }} />
        </div>
        <AnimatedImage containerId={containerId} innerId={innerId} />
      </div>
      <video
        onMouseOver={e => {
          if (!open) {
            e.currentTarget.muted = false
          }
        }} onClick={e => {
          if (!open) {
            e.currentTarget.muted = false
          }
        }} ref={videoref} onTimeUpdate={(e: SyntheticEvent<HTMLVideoElement, Event>) => {
          if (e.currentTarget.muted) {
            // e.currentTarget.muted = false

          }
          if (e.currentTarget.currentTime > 6) {
            if (e.currentTarget.style.opacity === '1') {
              e.currentTarget.style.opacity = '0'
              e.currentTarget.style.filter = 'blur(10px)'
            }
          }
        }} style={end ? { opacity: 0, visibility: 'hidden' } : { opacity: 1 }} webkit-playsinline="true" playsInline onEnded={e => {
          setEnd(true)
        }} controls={false} autoPlay muted className="fixed  z-50 inset-0 w-full h-full transition-all lg:block duration-[2s] ease-in-out  max-w-full object-cover pointer-events-auto"
        src="https://res.cloudinary.com/dfgbpib38/video/upload/f_auto:video,q_auto/AnJoel/cudmqrtwawefjlrgova4" />

    </div>

  )
}