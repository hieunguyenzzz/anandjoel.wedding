"use client"
import NextImage, { ImageProps, } from "next/image";

export default function Image({...props}: Omit<ImageProps, 'alt' | 'src'> & {
  src: string,
  alt?: string,
  animated?: boolean,
}) {
  const { style, className, animated, src = "/", ...rest } = props
  let _src =src
  if(typeof _src === 'string'&& _src.includes("https://assets.tina.io/3a743d97-a554-4b19-acc5-85219789c469")){
    _src=_src.replace("https://assets.tina.io/3a743d97-a554-4b19-acc5-85219789c469","")
  }
  return (
    <NextImage {...rest} alt={props.alt || 'image'} src={_src || '/'}
      className={className}
    />
  )
}