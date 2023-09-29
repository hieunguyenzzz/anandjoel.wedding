
import Image from '@/components/common/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
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
export default function Page() {
  return (
    <div className="animate-fade w-full animate-duration-[3000ms] animate-ease-in-out text-[12px] lg:text-lg  isolate text-[#111111ff] flex flex-col gap-6 relative isolate">
      <div className=' container mx-auto flex flex-col relative justify-center items-center lg:relative'>
        <Image src={bgImage} priority placeholder='blur' className='hidden  lg:block -z-10 inset-0 w-full  max-w-full object-cover animate-fade' />
        <Image src={bgImageMoble} priority placeholder='blur' className=' -z-10 lg:hidden inset-0 fixed w-full h-full max-w-full object-cover animate-fade' />
        <ul className='justify-center w-full animate-fade origin-top-right duration-300 text-center min-h-[calc(100vh-280px)] flex-col   isolate  z-10 top-0 left-0 flex  w-full items-center gap-6 lg:hidden'>
          {
            menuItems.map((item, index) => {
              if (item.href === '/') {
                return null
              }
              return <li key={index} style={{
                animationDelay: `${300 + (index + 1) * 100}ms`
              }} className='flex w-full flex-1 flex-col  animate-fade-up  items-center gap-2 relative max-w-[200px] lg:max-w-xs'>
                <Link href={item.href} className='justify-center group flex items-center duration-500  ease-in-out  absolute inset-0  h-full text-shadow '>
                  <Image width={200} height={200} src={item.image} alt={item.title} className='object-cover transition-transform group-hover:scale-110 absolute inset-0 w-full h-full ' />
                  <div className='text-2xl font-semibold w-full uppercase hidden'>{item.title}</div>
                </Link>
              </li>
            })}
        </ul>
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
        <div className="absolute inset-0 hidden lg:block w-full h-full pointer-events-none" style={{ boxShadow: 'inset 0px 0px 16px 16px #C788B0, inset 0px 0px 33px 27px #C788B0' }} />
      </div>
    </div>
  )
}