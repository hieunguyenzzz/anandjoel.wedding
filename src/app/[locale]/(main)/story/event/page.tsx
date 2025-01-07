"use client"
import Image from "@/components/common/image";
import { useEvent } from "@/libs/source";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import 'react-image-lightbox/style.css';
import Lightbox, {
  SlideImage
} from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { NextJsImage } from "../../bites/page";
import right from '../_assets/AJ-web-02.png';
import left from '../_assets/AJ-web-03 (1).png';
const total = 84

const Mark = ({ children, id, className }: { children: ReactNode, id: string, className?: string }) => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setNumber(total)
    } else {
      window.addEventListener("scroll", (e) => {
        let height = window.innerHeight / 3 *2
        // console.log('scroll', window.scrollY, Math.floor((Math.max(height - window.scrollY, 0) / height * total)))
        setNumber(total - Math.floor((Math.max(height - window.scrollY, 0) / height * total)))
      });
    }

  }, []);
  return  <div id={`mark-${id}`} className={className + " pointer-events-none"} >
  {children}
</div >
}
export default function Page() {
  let event = useEvent()
  const [current, setCurrent] = useState<string | null | undefined>(null)
  const currentItem = event.fields?.find((item, index) => (item?.name) === current)

  return (
    <>
        <div className={clsx("isolate top-0 fixed inset-0 h-full  w-full z-20 flex items-center")}>
        <div className="pointer-events-none">
          <Image src={right} priority placeholder='blur' className='absolute top-0 w-full  md:w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
          <Image src={left} priority placeholder='blur' className='absolute top-0 w-full md:w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
        </div>
      </div>
      <div className="transition-all z-30 relative duration-[3s] w-full ease-in-out isolate mx-auto">
        <div className="z-10 relative mx-auto max-w-[65ch] ">
          <div className="w-full h-full flex  flex-col relative pt-[100px] justify-center items-center md:pt-[3vw]  gap-24 ">
            <div className="lg:max-w-[50vw] relative w-full aspect-video flex justify-center items-center">
              <div className="aspect-video group relative w-full overflow-hidden rounded-xl bg-slate-400 bg-opacity-20 backdrop-blur-lg">
                <iframe className="absolute w-full h-full rounded-xl" src="https://player.vimeo.com/video/1044266566?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="anjoe"></iframe>
              </div>
            </div>
            <div className=" animate-fade-up w-full animate-delay-[800ms] pointer-events-auto">
              <div className="container">
                <img loading="lazy" className="max-w-[min(20vw,80px)] mx-auto mb-24" src="/gif/nhen.webp"></img>
                <ul className="grid grid-cols-3 gap-6">
                  {
                    event.fields?.map((field, index) => {
                      let title = field?.name
                      let image = field?.images?.[0]
                      if(!image) 
                        return null
                      return <li key={index} className="text-center w-full ">
                        <div className='galleryID-item w-full h-full  pt-[100%] lg:pt-[100%] relative '>
                          <div className=' rounded-lg bg-[#e9a48a52] w-full h-full absolute inset-0'>
                            {image && <Image width={400} height={400} sizes="400px" src={image} alt={title || ''} className='object-cover w-full h-full absolute inset-0 rounded-lg' />}
                          </div>
                          <button onClick={() => setCurrent(title)} className="absolute left-0 cursor-pointer top-0 h-full w-full flex justify-center items-center text-center  text-magical">
                            <div className="bg-white p-[0.5em_0.5em_0.5em_0.5em] relative">
                              <div className="flex ">
                                <svg className="absolute top-0 right-[100%] h-full text-white" fill="white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.1 28" xmlSpace="preserve" ><polygon className="st0" points="1.9,0 0,2.3 1.3,4.8 1.6,6.6 2.2,7.7 3.7,9.5 3.2,9.8 3.7,10.9 3.7,11.8 3.4,12.8 2.6,13.7 3.2,14.8
                                3.7,15.8 3.3,16.5 2.8,17.1 1.5,19.2 2.7,20.5 3.5,23.1 2.7,24.4 1.8,26.4 1.8,26.8 2.5,27.3 3.4,27.5 4.2,28 14.1,28 14.1,0 " /></svg>
                                <svg className="absolute top-0 left-[100%] h-full text-white" fill="white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 11.5 28" xmlSpace="preserve" ><polygon className="st0" points="9.1,0 9.3,1.1 9.7,1.9 9.7,2.3 9.9,2.7 9.9,3.3 10.1,4 10.1,4.7 10.1,5.3 9.6,5.7 9.9,6.3 10.1,6.8
                                10.7,7.3 10.7,7.6 10.6,7.9 10.7,8.9 10.7,9.5 11.5,10.6 11.2,11 11.5,11.2 10.9,11.8 10.5,12.5 10.7,12.7 11,12.7 11.1,12.9
                                10.6,14.1 9.9,15 8.2,16.7 8.8,17.2 8.4,18 8.8,18.8 8.7,19.6 8.8,20.5 8.7,20.9 8.7,21.3 9.2,21.8 8.7,22.6 8.8,23 8.8,23.2
                                9,23.4 8.6,23.7 8.4,24.4 8.4,24.9 7.9,25.2 7.6,26.1 7.9,26.8 8.5,27.6 6.9,28 0,28 0,0 " /></svg>
                                <div className='flex flex-col items-center text-center'>
                                  <h3 className="font-bold text-sm lg:text-lg font-title text-magical-item leading-[1.2]">{title}</h3>
                                </div>
                              </div>
                            </div>
                          
                          </button>
                        </div>
                      </li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
     
          <Mark id={'content'} className="mt-[5vh]">
            <div className=" min-h-screen flex w-full h-full justify-center items-center  gap-12 flex-col ">
              <img loading="lazy" className="max-w-[min(20vw,120px)] mx-auto my-24" src="/gif/bongua.webp"></img>
              <div className="lg:max-w-[50vw] mx-auto relative w-full flex justify-center items-center pointer-events-auto">
                <div className="aspect-video group relative w-full overflow-hidden rounded-xl bg-slate-400 bg-opacity-20 backdrop-blur-lg">
                  <iframe className="absolute w-full h-full rounded-xl" src="https://player.vimeo.com/video/1043362935?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="anjoe_animation_720p"></iframe>
                </div>
              </div>
              <img loading="lazy" className="max-w-[min(20vw,120px)]  mx-auto mb-24" src="/gif/buom.webp"></img>
            </div>
          </Mark>
        </div>
      </div >
{currentItem&&  <Lightbox
                              open={!!currentItem}
                              close={() => setCurrent(null)}
                              slides={currentItem?.images.map(item=>imgPropsToSlideProps({src:item}))}
                              render={{ slide: NextJsImage, thumbnail: NextJsImage }}
                              plugins={[Thumbnails]}
                              index={0}
                            />}
    </>

  )
}



let imgPropsToSlideProps = (imgProps: {src:string,alt:string}): SlideImage => {
  if(imgProps.src.includes("https://assets.tina.io/3a743d97-a554-4b19-acc5-85219789c469"))
  return ({
    src: `https://thumbor.hieunguyen.dev/unsafe/2000x/`+encodeURIComponent(imgProps.src),
    alt: imgProps.alt,
  });
  return imgProps;
}