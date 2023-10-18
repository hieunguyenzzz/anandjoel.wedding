import Image from '@/components/common/image'
import Link from 'next/link'
import bitesImage from '../../../public/BITES-150x150.png'
import eventsImage from '../../../public/EVENTS.png'
import exploreImage from '../../../public/explore-tag-3-150x150.png'
import logo from '../../../public/logo-768x721.png'
import qaImage from '../../../public/qa-tag-150x150.png'
import storyImage from '../../../public/story.png'
import travelImage from '../../../public/travel-tag-768x721.png'
import client from '../../../tina/__generated__/client'
import bite from './asset/bite-slide-1.png'
import events from './asset/events-slide.png'
import explore from './asset/explore-tag-1.png'
import story from './asset/story-slide.png'
import travel from './asset/travel-slide.png'

export const menuItems = [
  {
    title: 'Story',
    image: storyImage,
    imageL: story,
    href: '/story',
  },
  {
    title: 'Events',
    image: eventsImage,
    imageL: events,
    href: '/event',
  }, {
    title: 'Travel',
    image: travelImage, imageL: travel,
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
    image: exploreImage, imageL: explore,
    href: '/explore',
  },
  {
    title: 'Q&A',
    image: qaImage, imageL: bite,
    href: '/qa',
  },
]
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const props = await client.queries.page({ relativePath: 'all.md' })
  return (
    <>
      <header className='flex gap-6 justify-center px-6 lg:px-12 z-20 relative pointer-events-none'>
        <div className='flex gap-6 justify-between  w-full z-20 '>
          <Link href="/" className='w-[150px] relative text-shadow pointer-events-auto'>
            <Image src={logo} alt='logo' className='object-cover' />
          </Link>
          <div className="flex items-center space-x-6"
          >
            <button className="flex pointer-events-auto flex-col lg:flex-row items-stretch uppercase  font-sweetsans  text-3xl text-white">
              <svg fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 116.93 111.19">
                <g>
                  <path d="M51.4,68.9,38,97.81H33.47L20.06,68.9h5.66l10,22.58H36L46,68.9Z" />
                  <path d="M57.38,97.81V68.9h5V97.81Z" />
                  <path d="M88.41,84.93H77.3v8.45H96.87v4.43H72.34V68.9H95.8v4.43H77.3V80.5H88.41Z" />
                  <path d="M0,0V111.19H116.93V0ZM92.68,12a21.2,21.2,0,0,1,13.46,5.22l-3.45,3.1a15,15,0,0,0-10-3.9c-6.25,0-10.63,5-10.63,10.94,0,5.57,3.81,10.89,11.11,10.89,3,0,6.55-.89,8.5-2.35v-5.8H92.64V25.7h13.59V38.36A23.78,23.78,0,0,1,92.9,42.7c-9.16,0-16-6.86-16-15.36A15.42,15.42,0,0,1,92.68,12Zm-49.27.88h4.38L64.48,33h0v-20h5V41.82H65.1L48.41,21.76h0V41.82h-5Zm-31.61,0H35.26v4.43H16.76v7.17H27.87v4.43H16.76v8.45H36.32v4.43H11.8Zm100.1,93.34H5V59.17H111.9Z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className='px-6 lg:px-12 pb-12 flex-1 flex items-center justify-center'>
        {children}
      </main>
    </>
  )
}
