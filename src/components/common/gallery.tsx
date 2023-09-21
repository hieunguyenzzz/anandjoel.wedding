"use client"

import { unstable_getImgProps } from "next/image"
import React from "react"
import GalleryLightBox from "./gallery-lightbox"

export default function Gallery({ id, title, description, images = [], children, className }: { id: string, title: string, description: string, images: string[], children?: React.ReactNode, className: string }) {
  const [show, setShow] = React.useState(false)
  return <>
    <button className={className} onClick={() => {
      setShow(true);
    }}>{children}</button>
    {show && <GalleryLightBox size={images.length} getItem={(index) => {
      let url = images[index]
      let imgProps = unstable_getImgProps({
        alt: title,
        fill: true,
        src: url,
      })
      return {
        alt: title,
        width: imgProps.props.width,
        height: imgProps.props.height,
        original: url,
        thumbnail: imgProps.props.src,
      }
    }} />}
  </>
}