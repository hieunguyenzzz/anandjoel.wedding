"use client"
import Image from 'next/image'
import type { DataSourceArray } from 'photoswipe'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, GalleryProps, Item, ItemProps } from 'react-photoswipe-gallery'
const GalleryLightBox = ({ size, getItem }: {
  size: number, getItem: (i: number) => Omit<ItemProps, 'children'>
}) => {
  const uiElements: GalleryProps['uiElements'] = [
    {
      name: 'bulletsIndicator',
      order: 9,
      isButton: false,
      appendTo: 'wrapper',
      onInit: (el, pswpInstance) => {
        let prevIndex = -1
        const thumbnails: HTMLElement[] = []
        const dataSource = pswpInstance.options.dataSource as DataSourceArray

        for (let i = 0; i < dataSource.length; i++) {
          const slideData = dataSource[i]

          const thumbnail = document.createElement('div')
          thumbnail.style.transition = 'transform 0.15s ease-in'
          thumbnail.style.opacity = '0.6'
          thumbnail.style.cursor = 'pointer'
          thumbnail.onclick = (e: MouseEvent) => {
            const target = e.target as HTMLImageElement | HTMLDivElement
            const thumbnailEl =
              target.tagName === 'IMG'
                ? target.parentElement
                : (e.target as HTMLImageElement | HTMLDivElement)
            if (thumbnailEl) {
              pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
            }
          }

          const thumbnailImage = document.createElement('img')
          thumbnailImage.setAttribute('src', slideData.msrc || '')
          thumbnailImage.style.width = '100%'
          thumbnailImage.style.height = '100%'
          thumbnailImage.style.objectFit = 'cover'

          thumbnail.appendChild(thumbnailImage)

          el.appendChild(thumbnail)

          thumbnails.push(thumbnail)
        }

        pswpInstance.on('change', () => {
          if (prevIndex >= 0) {
            const prevThumbnail = thumbnails[prevIndex]
            prevThumbnail.style.opacity = '0.6'
            prevThumbnail.style.cursor = 'pointer'
            prevThumbnail.style.transform = 'scale(1)'
          }

          const currentThumbnail = thumbnails[pswpInstance.currIndex]
          currentThumbnail.style.opacity = '1'
          currentThumbnail.style.cursor = 'unset'
          currentThumbnail.style.transform = 'scale(1.2)'

          prevIndex = pswpInstance.currIndex
        })
      },
    },
  ]

  return (
    <Gallery uiElements={uiElements} >
      {
        new Array(size).fill(true).map((_, index) => {
          let item = getItem(index)
          return <Item key={index}
            {...item}
          >
            {({ ref, open }) => (
              <Image
                width={600}
                height={600}
                className='object-cover w-full h-full'
                src={item.original || ''}
                sizes='600px'
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                alt={item.alt || ''}
                onClick={open}
              />
            )}
          </Item>
        })
      }
    </Gallery>
  )
}
export default GalleryLightBox