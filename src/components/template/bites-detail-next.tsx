"use client"
import { useSource } from "@/libs/source";
import Image, { ImageProps, StaticImageData, unstable_getImgProps } from "next/image";
import { useState } from "react";
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
import { PageBlocksBitesItem } from "../../../tina/__generated__/types";
import Content from "../common/markdow";

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
export default function Bitenext({ id, onClose }: { id: number, onClose: () => void }) {
  const source = useSource()
  const [open, setOpen] = useState(false)
  const data = source?.blocks?.find((item: any) => item?.__typename === 'PageBlocksBites')
  const item = data.item[id] as PageBlocksBitesItem
  if (!item) return null
  let images: SlideImage[] = []
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
  if (!images) return null
  console.log({ images })
  let modalId = `my_modal_${id}`
  return (
    <>
      <dialog id={modalId} open onClose={onClose} className="modal modal-bottom isolate z-50">
        <div className="modal-box overflow-y-auto border-none  shadow-none bg-transparent overflow-hidden pb-0 min-h-screen animate-fade-up flex flex-col">
          <div className="text-white">
            <h3>{item.title}</h3>
            <Content content={item.description}>{item.title}</Content>
          </div>
          <div className=" flex-1  self-center w-screen p-[1.5rem]">
            <div className="w-full h-full ov grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-6 ">
              {images.map((item, i) => {
                return <button onClick={() => setOpen(true)} key={i} className="w-full h-full relative pb-[100%]">
                  <Image {...item} width={600} height={600} className="object-cover absolute inset-0 w-full h-full bg-slate-50 bg-opacity-30" />
                </button>
              })}
            </div>
          </div>


        </div>
        <form method="dialog" className="modal-backdrop bg-black bg-opacity-60 backdrop-blur-xl">
          <button>close</button>
        </form>
        <div className=" fixed  top-4 right-12">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn border-2 border-white btn-circle shadow-2xl"><svg className="text-3xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg></button>
          </form>
        </div>
      </dialog>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        plugins={[Thumbnails]}

      />
    </>

  )
}
