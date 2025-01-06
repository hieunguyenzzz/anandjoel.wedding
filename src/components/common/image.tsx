import NextImage, { ImageProps, } from "next/image";

export default function Image({...props}: Omit<ImageProps, 'alt' | 'src'> & {
  src: string,
  alt?: string,
  animated?: boolean,
}) {
  const { style, className, animated, src = "/", ...rest } = props
let _src =src
if(typeof _src === 'string')
   _src = props?.src?.replace("https://assets.tina.io/3a743d97-a554-4b19-acc5-85219789c469","https://res.cloudinary.com/dfgbpib38/image/upload/f_auto,w_2160/anandjoeltina")
  return (
    <NextImage {...rest} alt={props.alt || 'image'} src={_src || '/'}
      className={className}
    />
  )
}