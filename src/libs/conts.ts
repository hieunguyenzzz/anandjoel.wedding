import bitesImage from '@/public/bites-tag-150x150.png'
import eventsImage from '@/public/EVENTS.png'
import exploreImage from '@/public/explore-tag-3-150x150.png'
import logo from '@/public/logo-768x721.png'
import qaImage from '@/public/qa-tag-150x150.png'
import storyImage from '@/public/story.png'
import travelImage from '@/public/travel-tag-768x721.png'
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