import Image from '@/components/common/image'
import Link from '@/components/common/link'
import LangButton from '@/components/langbutton'
import bitesImage from '@/public/BITES-150x150.png'
import eventsImage from '@/public/EVENTS.png'
import exploreImage from '@/public/explore-tag-3-150x150.png'
import logo from '@/public/logo-768x721.png'
import qaImage from '@/public/qa-tag-150x150.png'
import storyImage from '@/public/story.png'
import travelImage from '@/public/travel-tag-768x721.png'
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
  return (
    <>
      <header className='flex gap-6 justify-center px-6 lg:px-12 z-20 relative pointer-events-none'>
        <div className='flex gap-6 justify-between  w-full z-20 '>
          <Link href="/" className='w-[150px] relative text-shadow pointer-events-auto'>
            <Image src={logo} alt='logo' className='object-cover' />
          </Link>
          <div className="flex items-center space-x-6 pointer-events-auto"
          >
            <LangButton />
          </div>
        </div>
      </header>
      <main className='px-6 lg:px-12 pb-12 flex-1 flex items-center justify-center'>
        {children}
      </main>
    </>
  )
}
