"use client"
import NextImage, { ImageProps, } from "next/image";

export default function Image(props: Omit<ImageProps, 'alt'> & {
  alt?: string
}) {
  const { className, ...rest } = props
  return (
    <NextImage {...rest} alt={props.alt || 'image'}
      className={className + " " + "animate-fade blur-3xl transition-all duration-300 ease-in-out"}
      onLoadingComplete={e => {
        e.style.filter = 'none'
      }}
    />
  )
}