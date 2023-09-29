"use client"
import { useSource } from "@/libs/source";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { PageBlocksBitesItem } from "../../../tina/__generated__/types";

export default function Bite({ id, onClose }: { id: number, onClose: () => void }) {
  const [photoIndex, setindex] = useState(0)
  const source = useSource()
  const [state, setState] = useState()
  const data = source?.blocks?.find((item: any) => item?.__typename === 'PageBlocksBites')
  const item = data.item[id] as PageBlocksBitesItem
  if (!item) return null
  let images = item.gallery?.map(i => i?.image || "").filter(Boolean) || []
  item.images?.forEach(i => i && images?.push(i))
  if (!images) return null
  console.log({ images }, item.images)
  return (
    <Lightbox
      onImageLoad={setState}
      mainSrc={images[photoIndex]}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      onCloseRequest={onClose}
      onMovePrevRequest={() => setindex((photoIndex + images.length - 1) % images.length)

      }
      onMoveNextRequest={() => setindex((photoIndex + 1) % images.length)

      }
    />
  )
}
