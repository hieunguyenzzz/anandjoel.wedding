
import Image from '@/components/common/image'
import creimage from '../../../public/event/CER.png'
import recImage from '../../../public/event/REC.png'
import bgImage from '../../../public/event/bg2.png'
export default function Event() {
  let ratio = (bgImage.height / bgImage.width) * 100
  return (
    <div className="min-h-screen text-[12px] lg:text-[2vw] relative isolate text-[#111111ff] flex flex-col gap-6">
      <div style={{
        minHeight: ratio + 'vw',
      }} className='py-[18vw]  px-[20%] pb-[30vw] gap-[10vw] flex flex-col relative justify-center'>
        <Image src={bgImage} priority placeholder='blur' fill className='absolute top-0 left-0 w-full' />
        <div className='w-full relative  '>
          <div className='text-center flex flex-col items-center gap-2 relative '>
            <Image src={creimage} priority placeholder='blur' className='max-w-md w-2/5' />
            <div className=' whitespace-pre-wrap max-w-prose leading-loose'>
              <div className='py-1 text-[1.4em] font-bold' >at the Tree of Life</div>
              <p>
                {`december 16, 2023 
03:00 – 04:30
Thành phố Đà Lạt, Lâm Đồng, Vietnam
(transportation will be provided to and from the venue and hotel)`}
              </p>
            </div>
          </div>
        </div>
        <div className='w-full relative  '>
          <div className='text-center flex flex-col items-center gap-2 relative '>
            <Image src={recImage} priority placeholder='blur' className='max-w-md w-2/5' />
            <div className=' whitespace-pre-wrap max-w-prose leading-loose'>
              <div className='py-1 text-[1.4em] font-bold' >at the Tree of Knowledge</div>
              <p>
                {`december 16, 2023
07:00 – 10:30
Thành phố Đà Lạt, Lâm Đồng, Vietnam
(transportation will be provided to and from the venue and hotel)`}
              </p>
            </div>
          </div>
        </div>
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none '></div>
      </div>
    </div>
  )
}
