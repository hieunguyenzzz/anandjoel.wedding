"use client";
import Image from '@/components/common/image';
import Map from '@/components/template/explore/map';
import { useSource } from '@/libs/source';
import { Field } from '@/libs/tina';
import { ImageProps, StaticImageData, unstable_getImgProps } from "next/image";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useId, useState } from 'react';
import 'react-image-lightbox/style.css';
import Lightbox, {
  RenderSlideProps,
  Slide,
  SlideImage,
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { PageBlocksBites, PageBlocksBitesItem, PageBlocksExploreItem, PageBlocksExploreItemGallery } from '../../../../tina/__generated__/types';

function isNextJsImage(slide: Slide): slide is StaticImageData {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

/*
 * For JavaScript version of this sandbox please visit
 * https://codesandbox.io/p/sandbox/yet-another-react-lightbox-nextjs-bfjgb0?file=%2Fpages%2Findex.jsx
 */
export function NextJsImage({
  slide,
  rect,
}: Pick<RenderSlideProps, "slide" | "rect">) {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
      Math.min(rect.width, (rect.height / slide.height) * slide.width)
    )
    : rect.width;

  const height = !cover
    ? Math.round(
      Math.min(rect.height, (rect.width / slide.width) * slide.height)
    )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide}
        loading="eager"
        draggable={false}
        placeholder={slide.blurDataURL ? "blur" : undefined}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
}
let imgPropsToSlideProps = (imgProps: ImageProps): SlideImage => {
  return {
    src: imgProps.src.toString(),
    alt: imgProps.alt,

  };
}
function BiteDetail({ item, images: _images, onClose }: { item: PageBlocksExploreItemGallery, images?: string[], onClose: () => void }) {
  const [open, setOpen] = useState<number | Boolean>(false)
  let images: SlideImage[] = _images?.map(img => unstable_getImgProps({
    src: img,
    alt: '',
    width: 400,
    height: 400,
  }).props) || []
  if (!images?.length) {
    item.gallery?.forEach(i => i?.image && images?.push(imgPropsToSlideProps(unstable_getImgProps({
      src: i?.image,
      alt: '',
      width: 400,
      height: 400,
    }).props)))
    item.images?.forEach(i => i && images?.push(imgPropsToSlideProps(unstable_getImgProps({
      src: i,
      alt: '',
      width: 400,
      height: 400,
    }).props)))
  }

  if (!images) return null
  // console.log({ images })
  const id = useId()
  let modalId = `my_modal_${id}`
  return (
    <>
      <dialog id={modalId} open onClose={onClose} className="modal modal-bottom  z-[51]">
        <style>{`header{z-index:1!important}`}</style>
        <div className="modal-box overflow-y-auto  border-none  shadow-none bg-transparent overflow-hidden pb-0 min-h-screen  flex flex-col">
          <div className="text-white animate-fade-up text-sm">
            <h3 className='text-[1.8em] pb-2'>{item.title}</h3>
            {item.description && item.description}
          </div>
          <div className=" flex-1  self-center w-screen p-[1.5rem] animate-fade-up animate-delay-150">
            <div className="w-full h-full grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-6 ">
              {images.map((item, i) => {
                return <button onClick={() => setOpen(i)} key={i} className="w-full   h-full relative pb-[100%]">
                  <Image {...item} width={600} height={600} className="object-cover absolute inset-0 w-full h-full bg-slate-50 bg-opacity-30 " />
                </button>
              })}
            </div>
          </div>


        </div>
        <form method="dialog" className="modal-backdrop bg-black bg-opacity-60 backdrop-blur-xl ">
          <button>close</button>
        </form>
        <div className=" fixed top-6 right-6">
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
const initid = (s: string) => s.replaceAll(' ', '-').toLowerCase()

const Content = ({ id, setid, items, blockIndex, title, description, images, location }: { id: number, setid: (n: number) => void, items: PageBlocksBitesItem[], blockIndex: number, location: string, title, description, images?: string[] }) => {
  const [current, setCurrent] = useState(null)
  const currentItem = items?.find((item, index) => initid(item?.title) === id)
  if (!currentItem) return <section className="mt-12 mx-auto px-4  md:px-8">
    <div className="max-w-lg">
      <h1 className="text-[1.4em] font-title text-gray-800 font-semibold mt-2">
        {title || "Explore Vietnam"}
      </h1>
      <p className="mt-3 ">
        {description || `Blogs that are loved by the community. Updated every hour.
      The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015`}
      </p>
    </div>
    <div className="grid xl:grid-cols-2  mt-6 gap-6" id="galleryID">
      {
        items?.map((item, index) => {
          // console.log({ item })
          const title = item?.title || ''
          return <Field key={index} name={`blocks.${blockIndex}.item.${index}.title`}>
            <div className='galleryID-item w-full h-full  pt-[100%] lg:pt-[100%] relative '>
              <div className=' rounded-lg bg-[#e9a48a52] w-full h-full absolute inset-0'>
                {item?.image && item?.image[0] === "/" && <Image width={600} height={600} src={item?.image} alt={title || ''} className='object-cover w-full h-full absolute inset-0 rounded-lg' />}
              </div>

              <button onClick={() => setid(item?.title)} className="absolute left-0 cursor-pointer top-0 h-full w-full flex justify-center items-center text-center  text-magical">
                <div className="bg-white p-[0.5em_0.5em_0.5em_0.5em] relative">
                  <div className="flex ">
                    <svg className="absolute top-0 right-[100%] h-full text-white" fill="white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.1 28" xmlSpace="preserve" ><polygon className="st0" points="1.9,0 0,2.3 1.3,4.8 1.6,6.6 2.2,7.7 3.7,9.5 3.2,9.8 3.7,10.9 3.7,11.8 3.4,12.8 2.6,13.7 3.2,14.8
            3.7,15.8 3.3,16.5 2.8,17.1 1.5,19.2 2.7,20.5 3.5,23.1 2.7,24.4 1.8,26.4 1.8,26.8 2.5,27.3 3.4,27.5 4.2,28 14.1,28 14.1,0 " /></svg>
                    <svg className="absolute top-0 left-[100%] h-full text-white" fill="white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 11.5 28" xmlSpace="preserve" ><polygon className="st0" points="9.1,0 9.3,1.1 9.7,1.9 9.7,2.3 9.9,2.7 9.9,3.3 10.1,4 10.1,4.7 10.1,5.3 9.6,5.7 9.9,6.3 10.1,6.8
            10.7,7.3 10.7,7.6 10.6,7.9 10.7,8.9 10.7,9.5 11.5,10.6 11.2,11 11.5,11.2 10.9,11.8 10.5,12.5 10.7,12.7 11,12.7 11.1,12.9
            10.6,14.1 9.9,15 8.2,16.7 8.8,17.2 8.4,18 8.8,18.8 8.7,19.6 8.8,20.5 8.7,20.9 8.7,21.3 9.2,21.8 8.7,22.6 8.8,23 8.8,23.2
            9,23.4 8.6,23.7 8.4,24.4 8.4,24.9 7.9,25.2 7.6,26.1 7.9,26.8 8.5,27.6 6.9,28 0,28 0,0 " /></svg>
                    <div className='flex flex-col items-center text-center'>
                      <h3 className="font-bold text-lg font-title text-magical-item leading-[1.2]">{title}</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </Field>
        })
      }
    </div>
  </section>
  console.log({ images, current, name: `/${location}/${current?.title}/` })
  return (
    <section className="mt-12 mx-auto px-4  md:px-8">
      <div key={currentItem?.title} className="prose">
        {currentItem && <button className='underline animate-fade-up animate-duration-500 animate-ease-in-out' onClick={() => setid('')}>Back</button>}
        <h1 className="text-3xl font-title text-gray-800 animate-fade-up animate-delay-100 font-semibold mt-2 animate-duration-500 animate-ease-in-out">
          {currentItem?.title}
        </h1>
        <p className="mt-3  animate-fade-up animate-delay-200 animate-duration-500 animate-ease-in-out">
          {currentItem?.description}
        </p>
      </div>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 mt-6 gap-6" id="galleryID">
        {
          currentItem && currentItem.gallery?.filter(Boolean).map((i, index) => {
            const item = i?.image
            const content = i?.content
            const popupId = `my_modal_${index}`
            const img = unstable_getImgProps({
              width: 1440,
              height: 1440,
              src: item,
              alt: ""
            })
            // // console.log({ item })
            return <div className='group relative' href={img.props.src} key={index + 1} >
              <Field key={index + 1} name={`blocks.${blockIndex}.item.${index}.title`}>
                <div onClick={() => {
                  window?.[popupId].showModal()
                }} className='w-full h-full  pt-[100%] lg:pt-[100%] relative '>
                  <Image width={600} height={600} src={img.props.src} alt={currentItem.title || ''} className='object-cover w-full h-full animate-fade-up absolute inset-0 rounded-lg bg-[#e9a48a52] ' />
                </div>
              </Field>
              <button onClick={e => {
                setCurrent(i)
              }} className='opacity-0 rounded-lg p-6 flex justify-center items-center invisible transition-all absolute inset-0 bg-white backdrop-blur-sm bg-opacity-60 group-hover:visible group-hover:opacity-100'>
                <div className='prose w-full'>
                  <h3>{i.name}</h3>
                  {content}
                </div></button>
            </div>
          })
        }
      </div>
      {current && <BiteDetail item={current} onClose={() => setCurrent(null)} images={images?.filter(img => img.includes(`/${current.title}/`))} />}
    </section >
  )
}


export default function Page() {
  const source = useSource()
  const blockIndex = source?.blocks?.findIndex((item: any) => item?.__typename === 'PageBlocksBites')
  const data = source?.blocks?.[blockIndex || 0] as PageBlocksBites
  // console.log({ data })
  const locations = (data?.item || []).map(item => item?.location).filter(Boolean)

  const searchParams = useSearchParams()
  const id = (searchParams.get('id'))
  const pathname = usePathname()
  const router = useRouter()
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  const setid = (id: string) => {
    router.replace(pathname + '?' + createQueryString('id', '' + initid(id)))
  }
  const currentItem = data?.item?.find((item, index) => item?.title && initid(item?.title) === id)
  const items = data.item?.reduce((acc, item) => {
    if (item?.variant !== "One") {
      acc.push({
        ...item,
        gallery: []
      })
    } else {
      acc[acc.length - 1].gallery?.push({
        ...item,
        name: '' + item.title,
        content: item.description,
        image: item.image,
      })
    }
    return acc
  }
    , [] as PageBlocksExploreItem[])
  const [images, setImages] = useState<string[]>([])
  useEffect(() => {
    fetch('/bites/api/images').then(res => res.json()).then(res => {
      setImages(res.files)
    })
  }, [])
  console.log({ images, currentItem })
  return <>
    <div className='flex flex-col lg:flex-row'>
      <div className='fixed left-0 top-0 h-screen w-full lg:w-[50%] isolate'>
        <div className='z-10'>
          <Map onSelect={e => {
            // console.log({ e })
            setid(e)
          }} current={currentItem?.title} locations={locations || []} />
        </div>
      </div>
      <div className='sticky  hidden md:flex top-[130px] h-[calc(100vh-126px)]  items-center justify-center w-[800px] md:max-w-[40vw] -z-10 pointer-events-none'>
        <div className='w-full flex-shrink-0'>
        </div>
      </div>
      <div className=' w-full lg:w-auto flex-1 max-w-4xl'>
        <Content {...{ id, setid, blockIndex, items, title: data?.title, location: currentItem?.location, description: data?.description, images }} />
      </div>
    </div>
  </>
}