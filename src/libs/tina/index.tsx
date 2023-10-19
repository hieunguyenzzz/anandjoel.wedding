"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
export { Field } from "./Field"
const UseTinaWithRouterLazy = dynamic(() => import('./UseTinaWithRouter'), { ssr: false })
export default function UseTinaWithRouter(props: { relativePath: string }) {
  const [editable, setEditable] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('tina.isEditing')) {
      setEditable(true)
    }
  }, [])
  if (!editable) return null
  return <UseTinaWithRouterLazy {...props} />
}