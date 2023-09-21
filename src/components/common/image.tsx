import NextImage, { ImageProps, } from "next/image";

export default function Image(props: Omit<ImageProps, 'alt'> & {
  alt?: string
}) {
  return (
    <NextImage {...props} alt={props.alt || 'image'} />
  )
}