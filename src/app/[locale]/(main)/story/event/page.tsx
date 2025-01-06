"use client"
import Image from "@/components/common/image";
import { useEvent } from "@/libs/source";
import { ImageProps } from "next/image";
import { ReactNode, useEffect, useId, useState } from "react";
import 'react-image-lightbox/style.css';
import Lightbox, {
  SlideImage
} from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { NextJsImage } from "../../bites/page";
import right from '../_assets/AJ-web-02.png';
import left from '../_assets/AJ-web-03 (1).png';
import bgImage from '../_assets/bites-bg.png';
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
         <Mark id={'bg'} className="fixed inset-0 w-full h-full" ><div className="pointer-events-none fixed inset-0 ">
            <Image src={bgImage} priority placeholder='blur' className='fixed object-top inset-0 w-full  h-full max-w-full pointer-events-none object-cover  -z-10 ' />
            <Image src={right} priority placeholder='blur' className='absolute transform translate-y-[max(-70vw,-100vh)] top-0  w-[131vh] object-top right-0 h-auto max-w-full pointer-events-none object-cover animate-fade' />
            <Image src={left} priority placeholder='blur' className='absolute transform translate-y-[max(-70vw,-100vh)] top-0 w-[131vh]  object-top left-0    h-auto max-w-full pointer-events-none object-cover animate-fade' />
          </div></Mark>
      <div className="transition-all z-30 relative duration-[3s] w-full ease-in-out isolate mx-auto">
        <div className="z-10 relative mx-auto max-w-[65ch] ">
          <div className="w-full h-full flex  flex-col relative pt-[100px] justify-center items-center md:pt-[3vw]  gap-24 ">
            <div className="lg:max-w-[50vw] relative w-full aspect-video flex justify-center items-center">
              <div className="aspect-video group relative w-full overflow-hidden rounded-xl bg-slate-400 bg-opacity-20 backdrop-blur-lg">
                <iframe className="absolute w-full h-full rounded-xl" src="https://player.vimeo.com/video/1043078570?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="anjoe"></iframe>
                <div className="group-hover:shadow-none transition-shadow pointer-events-none absolute inset-0 w-full h-full shadow-[inset_0px_0px_20px_25px_#000]"></div>
              </div>
            </div>
            <div className=" animate-fade-up w-full animate-delay-[800ms] pointer-events-auto">
              <div className="container">
                <img className="max-w-[min(20vw,80px)] mx-auto mb-24" src="/nhen-re.gif"></img>
                <ul className="grid grid-cols-3 gap-6">
                  {
                    event.fields?.map((field, index) => {
                      let title = field?.name
                      let image = field?.images?.[0]
                      return <li key={index} className="text-center w-full ">
                        <div className='galleryID-item w-full h-full  pt-[100%] lg:pt-[100%] relative '>
                          <div className=' rounded-lg bg-[#e9a48a52] w-full h-full absolute inset-0'>
                            {image && <Image width={600} height={600} src={image || '/'} alt={title || ''} className='object-cover w-full h-full absolute inset-0 rounded-lg' />}
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
              <img className="max-w-[min(20vw,120px)] mx-auto my-24" src="/bo-ngua-re.gif"></img>
              <div className="lg:max-w-[50vw] mx-auto relative w-full flex justify-center items-center pointer-events-auto">
                <div className="aspect-video group relative w-full overflow-hidden rounded-xl bg-slate-400 bg-opacity-20 backdrop-blur-lg">
                  <iframe className="absolute w-full h-full rounded-xl" src="https://player.vimeo.com/video/1043362935?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="anjoe_animation_720p"></iframe>
                  <div className="group-hover:shadow-none transition-shadow pointer-events-none absolute inset-0 w-full h-full shadow-[inset_0px_0px_20px_25px_#000]"></div>
                </div>
              </div>
              <img className="max-w-[min(20vw,120px)]  mx-auto mb-24" src="/buom-buom-1.gif"></img>
            </div>
          </Mark>
        </div>
      </div >
      {currentItem && <Gallery title={currentItem?.name + ''} onClose={() => setCurrent(null)} images={((currentItem?.images || []).map(item => item + ''))} />}

    </>

  )
}


function Gallery({ title, description, images: _images, onClose }: { title: string, description?: string, images?: string[], onClose: () => void }) {
  const [open, setOpen] = useState<number | Boolean>(false)
  let images: SlideImage[] = _images?.map(img => ({
    src: img,

  })) || []

  const id = useId()
  let modalId = `my_modal_${id}`
  if (!images) return null
  // console.log({ images })

  return (
    <>
      <dialog id={modalId} open onClose={onClose} className="modal modal-bottom  z-[51]">
        <style>{`header{z-index:1!important}`}</style>
        <div className="modal-box overflow-y-auto  border-none  shadow-none bg-transparent overflow-hidden pb-0 min-h-screen  flex flex-col">
          <div className='container w-full mx-auto'>
            <div className="text-white animate-fade-up text-sm ">
              <h3 className='text-[1.8em] pb-2 capitalize'>{title}</h3>
              {description}
            </div>
            <div className=" flex-1  self-center w-full py-[1.5rem] animate-fade-up animate-delay-150">
              <div className="w-full h-full grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                {images.map((item, i) => {
                  return <button onClick={() => setOpen(i)} key={i} className="w-full   h-full relative pb-[100%] text-white group">
                    <Image {...item} width={600} height={600} className="rounded-lg object-cover absolute inset-0 w-full h-full bg-slate-50 bg-opacity-30  " />
                  </button>
                })}
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop bg-black bg-opacity-60 backdrop-blur-xl ">
          <button>close</button>
        </form>
        <div className=" fixed top-3 right-3">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn border-2 border-white btn-circle shadow-2xl"><svg className="text-3xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg></button>
          </form>
        </div>
      </dialog>
      <Lightbox
        open={open !== false}
        close={() => setOpen(false)}
        slides={images}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        plugins={[Thumbnails]}
        index={Number(open)}
      />
    </>

  )
}

let imgPropsToSlideProps = (imgProps: ImageProps): SlideImage => {
  return {
    src: imgProps.src.toString(),
    alt: imgProps.alt,

  };
}