"use client"
import { menuItems } from '@/app/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import bgImageMoble from '../../../public/mobile-bg.png'
import Image from './image'
const total = 24

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
          return number + 1
        })
      }, 24)
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
          return Math.max(number - 1, 0)
        })
      }, 24)
      return () => {
        i && clearInterval(i)
      }
    }

  }, [open])
  return <>
    {useMemo(() => <style >{`
  .mark{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 900000000000002;
    background: url(/Light_Background.jpg) no-repeat bottom right;
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
    background: antiquewhite;
    -webkit-mask-size: 1500% 600%;
    -webkit-mask-image: url(/middle-240.webp);
    mask-image: url(/middle-240.webp);
    -webkit-mask-position: calc(${Math.floor(number / total * 14)} / 14 * 100%) calc(${Math.floor(number / total * 5)} / 5 * 100%);

  }`}</style>, [Math.floor(number / total * 14), Math.floor(number / total * 5)])}
    <div data-number={number} className="fixed inset-0 w-full h-full mark " >
      {children}
    </div>
  </>
}
export function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  return (
    <>
      <input key={pathname} type="checkbox" onChange={e => setOpen(e.currentTarget.checked)} id="menu-toggle" className="hidden  peer" />
      {open && <style>
        {
          `html{
          overflow:hidden;
        }`
        }
      </style>}
      <div className='peer-checked:opacity-100 invisible peer-checked:visible opacity-0 transition-all pointer-events-none peer-checked:pointer-events-auto duration-1000 z-10 relative' >
        <Mark open={open}>
          <div className='w-full isolate fixed inset-0 h-full z-50'>
            <div className=" w-full h-full  text-[12px] lg:text-lg text-[#1a1a1a] flex flex-col gap-6 relative  isolate ">
              <Image src={bgImageMoble} priority placeholder='blur' className=' -z-10 object-top inset-0 fixed w-full h-full max-w-full object-cover ' />
              <ul className='justify-center flex-1  w-full pt-[126px]  origin-top-right duration-300 text-center  flex-col   isolate  z-10 top-0 left-0 flex items-center '>
                {
                  menuItems.map((item, index) => {
                    if (item.href === '/') {
                      return null
                    }
                    return <li key={index} style={{
                      animationDelay: `${300 + (index + 1) * 100}ms`
                    }} className='flex w-full flex-col animate-fade-up  items-center gap-2 relative max-w-[200px] lg:max-w-xs'>
                      <Link href={item.href} className='text-shadow py-6 lg:py-12'>
                        <div className='mt-[0.5em] font-header text-[min(4em,8vw)] font-extrabold'>{item.title}</div>
                      </Link>
                    </li>
                  })}
              </ul>
            </div>
          </div>
        </Mark>
      </div>

    </>
  )
}