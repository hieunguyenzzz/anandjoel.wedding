
import Image from '@/components/common/image';
import Link from 'next/link';
import bgImage from '../../../public/main-page-update.png';
import bgImageMoble from '../../../public/mobile-bg.png';
import { menuItems } from './layout';

export default function Page() {
  return (
    <div className="animate-fade animate-duration-[3000ms] animate-ease-in-out text-[12px] lg:text-lg relative isolate text-[#111111ff] flex flex-col gap-6">
      <div className='pb-[10vw] gap-[10vw] flex flex-col relative justify-center '>
        <Image src={bgImage} priority placeholder='blur' className='hidden fixed md:block -z-10 inset-0 w-full h-full max-w-full object-cover animate-fade' />
        <Image src={bgImageMoble} priority placeholder='blur' className=' -z-10 md:hidden inset-0 fixed w-full h-full max-w-full object-cover animate-fade' />
        <ul className='justify-center animate-fade origin-top-right duration-300 text-center min-h-[calc(100vh-280px)] flex-col   isolate  z-10 top-0 left-0 flex  w-full items-center gap-6 '>
          {
            menuItems.map((item, index) => {
              if (item.href === '/') {
                return null
              }
              return <li key={index} style={{
                animationDelay: `${1000 + (index + 1) * 100}ms`
              }} className='flex w-full flex-1 flex-col  animate-fade-up  items-center gap-2 relative max-w-[200px] lg:max-w-xs'>
                <Link href={item.href} className='hover:scale-110 justify-center flex items-center duration-500  ease-in-out  transition-transform absolute inset-0  h-full text-shadow '>
                  <Image width={200} height={200} src={item.image} alt={item.title} className='object-cover absolute inset-0 w-full h-full ' />
                  <div className='text-2xl font-semibold w-full uppercase hidden'>{item.title}</div>
                </Link>
              </li>
            })}
        </ul>
      </div>
    </div>
  )
}