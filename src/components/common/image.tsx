"use client"
import NextImage, { ImageProps, } from "next/image";

export default function Image(props: Omit<ImageProps, 'alt'> & {
  alt?: string,
  animated?: boolean,
}) {
  const { className, animated, ...rest } = props
  return (
    <NextImage {...rest} alt={props.alt || 'image'}
      className={className}
      onLoadingComplete={e => {
        e.style.filter = 'none'
      }}
    />
  )
}