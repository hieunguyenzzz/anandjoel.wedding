import Image from '@/components/common/image'
import SourceProvider from '@/libs/source'
import { UseTinaWithRouter } from '@/libs/tina'
import Link from 'next/link'
import bitesImage from '../../../public/BITES-150x150.png'
import eventsImage from '../../../public/EVENTS.png'
import exploreImage from '../../../public/explore-tag-3-150x150.png'
import logo from '../../../public/logo-768x721.png'
import bgImage from '../../../public/main-page-update.png'
import bgImageMoble from '../../../public/mobile-bg.png'
import qaImage from '../../../public/qa-tag-150x150.png'
import storyImage from '../../../public/story.png'
import travelImage from '../../../public/travel-tag-768x721.png'
import client from '../../../tina/__generated__/client'
import './globals.css'

export const menuItems = [
  {
    title: 'Story',
    image: storyImage,
    href: '/story',
  },
  {
    title: 'Events',
    image: eventsImage,
    href: '/event',
  }, {
    title: 'Travel',
    image: travelImage,
    href: '/travel',
  },
  {
    title: 'Home',
    image: logo,
    href: '/',
  },
  {
    title: 'Bites',
    image: bitesImage,
    href: '/bites',
  },
  {
    title: 'Explore',
    image: exploreImage,
    href: '/explore',
  },
  {
    title: 'Q&A',
    image: qaImage,
    href: '/qa',
  },
]
const Header = () => {
  return <header className='flex gap-6  justify-center mx-auto z-20  h-[126px]  isolate relative '>
    <ul className='justify-center mx-auto items-center gap-6 hidden lg:flex relative   px-6 lg:px-12'>
      {/* <li className='absolute inset-[1.4em] rounded-lg backdrop-blur-sm pointer-events-none'></li> */}
      {
        menuItems.map((item, index) => {
          if (item.title === 'Home') return <li key={index} className='flex  flex-col  items-center gap-2 min-w-[200px]  h-[126px]  relative after:content-[""] after:pb-[100%]'>
            <Link href={item.href} className='hover:scale-110 duration-500 ease-in-out uppercase flex items-center text-2xl justify-center text-outline content-center transition-transform absolute inset-0'>
              {item.title === 'Home' ? <Image src={item.image} fill alt={item.title} priority className='object-contain' /> : <div className='mt-[0.5em]'>{item.title}</div>}
            </Link>
          </li>
          return <li key={index} className='flex flex-col  items-center gap-2 w-[126px]  h-[126px]  relative after:content-[""] after:pb-[100%]'>
            <Link href={item.href} className='hover:scale-110 duration-500 ease-in-out uppercase flex items-center text-2xl justify-center text-outline content-center transition-transform absolute inset-0'>
              {item.title === 'Home' ? <Image src={item.image} fill alt={item.title} priority className='object-cover' /> : <div className='mt-[0.5em]'>{item.title}</div>}
            </Link>
          </li>
        })}
    </ul>
    <div className='flex gap-6 justify-between lg:hidden w-full z-20 container  px-6 lg:px-12'>
      <Link href="/" className='w-[150px] text-shadow relative'>
        <Image priority src={logo} alt='logo' className='object-cover' />
      </Link>
      <div className="flex items-center space-x-6"
      >
        <button className="flex flex-col lg:flex-row items-stretch uppercase  font-sweetsans  text-3xl text-white">
          <svg fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 116.93 111.19">
            <g>
              <path d="M51.4,68.9,38,97.81H33.47L20.06,68.9h5.66l10,22.58H36L46,68.9Z" />
              <path d="M57.38,97.81V68.9h5V97.81Z" />
              <path d="M88.41,84.93H77.3v8.45H96.87v4.43H72.34V68.9H95.8v4.43H77.3V80.5H88.41Z" />
              <path d="M0,0V111.19H116.93V0ZM92.68,12a21.2,21.2,0,0,1,13.46,5.22l-3.45,3.1a15,15,0,0,0-10-3.9c-6.25,0-10.63,5-10.63,10.94,0,5.57,3.81,10.89,11.11,10.89,3,0,6.55-.89,8.5-2.35v-5.8H92.64V25.7h13.59V38.36A23.78,23.78,0,0,1,92.9,42.7c-9.16,0-16-6.86-16-15.36A15.42,15.42,0,0,1,92.68,12Zm-49.27.88h4.38L64.48,33h0v-20h5V41.82H65.1L48.41,21.76h0V41.82h-5Zm-31.61,0H35.26v4.43H16.76v7.17H27.87v4.43H16.76v8.45H36.32v4.43H11.8Zm100.1,93.34H5V59.17H111.9Z" />
            </g>
          </svg>
        </button>
        <div className="group leading-none ">
          <Link href="/" className="text-3xl text-white z-20 block">
            <svg fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 116.92 111.19">
              <path d="M0,0V111.19H116.92V0ZM98.94,84.48H18v-10h81Zm0-23.9H18v-10h81Zm0-23.91H18v-10h81Z" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
    <input type="checkbox" className="hidden peer" id="menu-toggle" />
    <ul className='justify-center   origin-top-right duration-300 text-center pt-[150px] p-12 flex-col   h-screen isolate fixed z-10 top-0 overflow-auto left-0 hidden peer-checked:flex  w-full items-center gap-6 '>
      <label htmlFor="menu-toggle">
        <Image src={bgImage} priority placeholder='blur' className='hidden fixed md:block -z-10 left-0 bottom-0 w-full h-[120%] max-w-full object-cover -up' />
        <Image src={bgImageMoble} priority placeholder='blur' className=' -z-10 md:hidden left-0 bottom-0 fixed w-full h-[120%] max-w-full object-cover -up' />
      </label>
      {
        menuItems.map((item, index) => {
          if (item.href === '/') {
            return null
          }
          return <li key={index} style={{
            animationDelay: `${(index + 1) * 100}ms`
          }} className='flex w-full flex-1 flex-col  -up flex-shrink-0  items-center gap-2 relative max-w-xs'>
            <Link href={item.href} className='hover:scale-110 justify-center flex items-center duration-500 ease-in-out transition-transform absolute inset-0  h-full text-shadow'>
              <Image priority width={200} height={200} src={item.image} alt={item.title} className='object-contain' />
              <div className='text-2xl font-semibold w-full uppercase hidden'>{item.title}</div>
            </Link>
          </li>
        })}
    </ul>
  </header>
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const props = await client.queries.page({ relativePath: 'all.md' })
  return (
    <SourceProvider defaultsource={props.data}>
      <UseTinaWithRouter />
      <html lang="en" data-theme="light">
        <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
        <body className={"bg-[#c2c5ff] min-h-screen text-[18px] md:text-[min(24px,5vw)]"}>
          <Header />
          <main className='px-6 lg:px-12 pb-12'>
            <noscript>
              <style>
                {`img{
                  opacity:100!important
                }`}
              </style>
            </noscript>

            {children}
          </main>
        </body>
      </html>
    </SourceProvider>
  )
}
