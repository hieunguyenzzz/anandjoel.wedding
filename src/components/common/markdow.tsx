"use client"

import Link from "next/link"
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'

const components = {
  // The "NewsletterSignup" key maps to a "template" defined
  // on our "rich-text" field
  Link: ({ href, text }: {
    href: string, text: string
  }) => {
    return (
      <Link href={href} target="_blank" className="bg-primary text-white font-sweetsans py-3 px-6 no-underline uppercase hover:bg-opacity-70 focus:ring focus:outline-none ring-primary ring-offset-transparent ring-offset-2 transition-all duration-300 ease-in-out">{text || href}</Link>
    )
  },
}
export default function Content({ content }: {
  content: TinaMarkdownContent
}) {
  return (
    <TinaMarkdown content={content} components={components}></TinaMarkdown>
  )
}