"use client"
import { useSource } from "@/libs/source";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function Bite({ id, onClose }: { id: number, onClose: () => void }) {
  const [photoIndex, setindex] = useState(0)
  const source = useSource()
  const data = source?.blocks?.find((item: any) => item?.__typename === 'PageBlocksBites')
  const item = data.item[id]
  if (!item) return null
  const images = item.gallery?.map(i => i?.image || "").filter(Boolean)
  if (!images) return null

  return (
    <Lightbox
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
