"use client"
import NextLink from "next/link"
import { useParams } from "next/navigation"

const Link = ({ children, ...props }: { children: React.ReactNode }) => {
  const params = useParams()
  let href = `/${params.locale}${props.href}`
  console.log({ href })

  return <NextLink {...props} href={href} >
    {children}
  </NextLink>
}
export default Link