"use client"
import { useSource } from "@/libs/source";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function Bite({ id }: { id: string }) {
  const [photoIndex, setindex] = useState(0)
  const source = useSource()
  const data = source?.blocks?.find((item: any) => item?.__typename === 'PageBlocksBites')
  const router = useRouter()
  const item = data.item[id]
  if (!item) return null
  const images = item.gallery?.map(i => i?.image || "").filter(Boolean)
  const title = item.title
  if (!images) return null

  return (
    <Lightbox
      mainSrc={images[photoIndex]}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      onCloseRequest={() => { router.back() }}
      onMovePrevRequest={() => setindex((photoIndex + images.length - 1) % images.length)

      }
      onMoveNextRequest={() => setindex((photoIndex + 1) % images.length)

      }
    />
  )
}
