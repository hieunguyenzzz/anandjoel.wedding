import NextImage, { ImageProps, } from "next/image";

export default function Image(props: Omit<ImageProps, 'alt'> & {
  alt?: string,
  animated?: boolean,
}) {
  const { style, className, animated, src = "/", ...rest } = props
  return (
    <NextImage {...rest} alt={props.alt || 'image'} src={src || '/'}
      className={className}
    />
  )
}