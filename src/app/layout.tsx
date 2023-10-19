import SourceProvider from '@/libs/source'
import { UseTinaWithRouter } from '@/libs/tina'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import bitesImage from '../../public/BITES-150x150.png'
import eventsImage from '../../public/EVENTS.png'
import exploreImage from '../../public/explore-tag-3-150x150.png'
import logo from '../../public/logo-768x721.png'
import qaImage from '../../public/qa-tag-150x150.png'
import storyImage from '../../public/story.png'
import travelImage from '../../public/travel-tag-768x721.png'
import client from '../../tina/__generated__/client'
import './globals.css'
const fontTitle = localFont({
  src: [
    {
      path: '../../public/fonts/Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Thin.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ThinItalic.ttf',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--font-title',
})
const fontbase = Montserrat({ subsets: ['vietnamese'], variable: '--font-base', })
const fontHeader = localFont({
  src: '../../public/fonts/Header.ttf',
  variable: '--font-header',
})
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const props = await client.queries.page({ relativePath: 'all.md' })
  return (
    <SourceProvider defaultsource={props.data}>
      <UseTinaWithRouter relativePath={props.variables.relativePath} />
      <html lang="en" data-theme="light">
        <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
        <body className={([fontbase.className, fontbase.variable, fontTitle.variable, fontHeader.variable].join(' ') + "  text-[#1a1a1a] antialiased  min-h-screen  text-[18px] md:text-[min(24px,5vw)] ")}>
          {children}
        </body>
      </html>
    </SourceProvider>
  )
}
