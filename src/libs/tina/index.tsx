"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Exact, FullQuery } from "../../../tina/__generated__/types"
export { Field } from "./Field"
const UseTinaWithRouterLazy = dynamic(() => import('./UseTinaWithRouter'), { ssr: false })
export default function UseTinaWithRouter(props:{
  data: FullQuery,
  variables: Exact<{ relativePath: string }>,
  query: string
}) {
  const [editable, setEditable] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('tina.isEditing')) {
      setEditable(true)
    }
  }, [])
  if (!editable) return null
  return <UseTinaWithRouterLazy {...props} />
}