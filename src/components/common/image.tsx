"use client"
import NextImage, { ImageProps, } from "next/image";

export default function Image({...props}: Omit<ImageProps, 'alt' | 'src'> & {
  src: string,
  alt?: string,
  animated?: boolean,
}) {
  const { style, className, animated, src = "/", ...rest } = props
  let useLoader =false
  if(typeof src === 'string'&& src.includes("https://assets.tina.io/3a743d97-a554-4b19-acc5-85219789c469")){
    useLoader=true
  }
  return (
    <NextImage {...rest} alt={props.alt || 'image'} src={src || '/'}
      loader={useLoader?({src,width})=>{
        return `https://thumbor.hieunguyen.dev/unsafe/${width}x/`+encodeURIComponent(src)
      }:undefined}
      className={className}
    />
  )
}