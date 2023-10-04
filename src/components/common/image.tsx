"use client"
import NextImage, { ImageProps, } from "next/image";

export default function Image(props: Omit<ImageProps, 'alt'> & {
  alt?: string,
  animated?: boolean,
}) {
  const { style, className, animated, href, ...rest } = props
  return (
    <NextImage {...rest} alt={props.alt || 'image'} href={href || '/'} style={{ ...style, opacity: 0 }}
      className={className + " opacity-0 transition-opacity duration-500 ease-in-out"}
      onLoadingComplete={e => {
        e.style.opacity = '100'
      }}
    />
  )
}