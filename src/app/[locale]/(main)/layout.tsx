import Image from '@/components/common/image'
import { Nav } from '@/components/common/nav'
import bitesImage from '@/public/BITES-150x150.png'
import eventsImage from '@/public/EVENTS.png'
import exploreImage from '@/public/explore-tag-3-150x150.png'
import logo from '@/public/logo-768x721.png'
import qaImage from '@/public/qa-tag-150x150.png'
import storyImage from '@/public/story.png'
import travelImage from '@/public/travel-tag-768x721.png'
import Link from 'next/link'
import client from '../../../../tina/__generated__/client'

import LangButton from '@/components/langbutton'
import bg from '@/public/bg.png'
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
  return <header className={'flex  justify-between mx-auto   h-[126px]  isolate relative z-50'}>
    <ul className='justify-center mx-auto items-center gap-6 hidden xl:flex relative px-6 xl:px-12'>
      {/* <li className='absolute inset-[1.4em] rounded-lg backdrop-blur-sm pointer-events-none'></li> */}
      {
        menuItems.map((item, index) => {
          if (item.title === 'Home') return <li key={index} className='flex  flex-col items-center gap-2 min-w-[200px]  h-[126px]  relative after:content-[""] after:pb-[100%]'>
            <Link href={item.href} className='hover:scale-110 duration-500 ease-in-out uppercase flex items-center text-2xl justify-center text-outline content-center transition-transform absolute inset-0'>
              {item.title === 'Home' ? <Image src={item.image} fill alt={item.title} priority className='object-contain' /> : <div className='mt-[0.5em] font-header'>{item.title}</div>}
            </Link>
          </li>
          return <li key={index} className='flex flex-col  items-center gap-2 w-[126px]  h-[126px]  relative after:content-[""] after:pb-[100%]'>
            <Link href={item.href} className='hover:scale-110 duration-500 ease-in-out uppercase flex items-center text-2xl justify-center text-outline content-center transition-transform absolute inset-0'>
              {item.title === 'Home' ? <Image src={item.image} fill alt={item.title} priority className='object-cover' /> : <div className='mt-[0.5em] font-header'>{item.title}</div>}
            </Link>
          </li>
        })}
    </ul>
    <div className='hidden xl:block absolute top-12 right-12'>
      <LangButton />
    </div>
    <div className='w-full flex gap-6 justify-between xl:hidden  z-20   px-6 lg:px-12'>
      <Link href="/" className='flex-1 flex items-center text-shadow relative'>
        <Image priority src={logo} alt='logo' className='object-cover w-[150px]' />
      </Link>
      <div className="flex items-center space-x-6"
      >
        <LangButton />
        <div className="group leading-none ">
          <label htmlFor="menu-toggle" className="text-3xl text-white z-20 block cursor-pointer">
            <svg fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 116.92 111.19">
              <path d="M0,0V111.19H116.92V0ZM98.94,84.48H18v-10h81Zm0-23.9H18v-10h81Zm0-23.91H18v-10h81Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
    <Nav />
  </header>
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const props = await client.queries.page({ relativePath: 'all.md' })
  return (
    <>
      <Header />
      <Image src={bg} width={400} className='fixed  inset-0 w-full h-full max-w-full object-cover animate-fade bg-[#f2b8ae] pointer-events-none' ></Image>
      <main className='px-6 lg:px-12 w-full'>
        <noscript>
          <style>
            {`img{
                  opacity:100!important
                }`}
          </style>
        </noscript>

        {children}
      </main>
    </>
  )
}
