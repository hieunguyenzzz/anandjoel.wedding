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
      <Link href={href} target="_blank" className="btn bg-[#d3afb9] btn-ghost font-bold text-whtie decoration-transparent">{text || href}</Link>
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