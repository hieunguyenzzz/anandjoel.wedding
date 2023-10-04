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
  const [photoIndex, setindex] = useState(0)
  const source = useSource()
  const [state, setState] = useState()
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
  return (
    <>
      <Lightbox
        open={true}
        close={() => onClose()}
        slides={images}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        plugins={[Thumbnails]}
        thumbnails={{
          width: 50,
          height: 50,

        }}
      />
    </>

  )
}
