import NextImage, { ImageProps, } from "next/image";

export default function Image(props: Omit<ImageProps, 'alt'> & {
  alt?: string,
  animated?: boolean,
}) {
  const { style, className, animated, href, ...rest } = props
  return (
    <NextImage {...rest} alt={props.alt || 'image'} href={href || '/'}
      className={className}
    />
  )
}