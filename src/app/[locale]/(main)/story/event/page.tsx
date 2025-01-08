"use client"
import Image from "@/components/common/image";
import { useEvent } from "@/libs/source";
import clsx from "clsx";
import { ReactNode, useEffect, useId, useState } from "react";
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
                  <iframe className="absolute w-full h-full rounded-xl" src="https://player.vimeo.com/video/1043362935?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="anjoe_animation_720p"></iframe>
                </div>
              </div>
              <img loading="lazy" className="max-w-[min(20vw,120px)]  mx-auto mb-24" src="/gif/buom.webp"></img>
                <blockquote className="instagram-media pointer-events-auto" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DESbAz9v_1h/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version={14} style={{background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 540, minWidth: 326, padding: 0, width: 'calc(100% - 2px)'}}><div style={{padding: 16}}> <a href="https://www.instagram.com/reel/DESbAz9v_1h/?utm_source=ig_embed&utm_campaign=loading" style={{background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%'}} target="_blank"> <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 40, marginRight: 14, width: 40}} /> <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center'}}> <div style={{backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100}} /> <div style={{backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 60}} /></div></div><div style={{padding: '19% 0'}} /> <div style={{display: 'block', height: 50, margin: '0 auto 12px', width: 50}}><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" /></g></g></g></svg></div><div style={{paddingTop: 8}}> <div style={{color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 550, lineHeight: 18}}>Xem bài viết này trên Instagram</div></div><div style={{padding: '12.5% 0'}} /> <div style={{display: 'flex', flexDirection: 'row', marginBottom: 14, alignItems: 'center'}}><div> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)'}} /> <div style={{backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: 14, marginLeft: 2}} /> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)'}} /></div><div style={{marginLeft: 8}}> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 20, width: 20}} /> <div style={{width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)'}} /></div><div style={{marginLeft: 'auto'}}> <div style={{width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)'}} /> <div style={{backgroundColor: '#F4F4F4', flexGrow: 0, height: 12, width: 16, transform: 'translateY(-4px)'}} /> <div style={{width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)'}} /></div></div> <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: 24}}> <div style={{backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 224}} /> <div style={{backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 144}} /></div></a><p style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17, marginBottom: 0, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}><a href="https://www.instagram.com/reel/DESbAz9v_1h/?utm_source=ig_embed&utm_campaign=loading" style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: 17, textDecoration: 'none'}} target="_blank">Bài viết do An Le (@anlestudio) chia sẻ</a></p></div></blockquote>
              <img loading="lazy" className="max-w-[min(20vw,80px)] mx-auto my-24" src="/gif/nhen.webp"></img>
              <script async src="//www.instagram.com/embed.js"></script>
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
 alt:""
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
              <div className="w-full h-full grid md:grid-cols-3 lg:grid-cols-4  gap-6 ">
                {images.map((item, i) => {
                  return <button onClick={() => setOpen(i)} key={i} className="w-full   h-full relative pb-[100%] text-white group">
                    <Image {...item} width={400} height={400} className="rounded-lg object-cover absolute inset-0 w-full h-full bg-slate-50 bg-opacity-30  " sizes="400px"/>
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
        slides={images.map(item=>imgPropsToSlideProps(item))}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        plugins={[Thumbnails]}
        index={Number(open)}
      />
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