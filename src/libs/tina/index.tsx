"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { tinaField, useTina } from "tinacms/dist/react"
import client from "../../../tina/__generated__/client"
import { Exact, PageQuery } from "../../../tina/__generated__/types"
import { useSetSource, useSource } from '../source'
export const UseTinaWithRouter = () => {
  const [tinaData, setTinadata] = useState<{
    data: PageQuery,
    variables: Exact<{ relativePath: string }>,
    query: string
  } | null | undefined>()
  const pathname = usePathname()
  useEffect(() => {
    // client.queries.page({ relativePath: pathname + '.md' }).then((data) => {
    client.queries.page({ relativePath: 'all.md' }).then((data) => {
      setTinadata(data)
    })
  }, [pathname])
  if (!tinaData) return null
  return <UseTina {...tinaData}>
  </UseTina>
}
export const UseTina = (props: {
  data: PageQuery,
  variables: Exact<{ relativePath: string }>,
  query: string
}) => {
  const {
    data,
  } = useTina(props)
  const setSource = useSetSource()
  useEffect(() => {
    setSource(data.page)
  }, [data])
  console.log({ data })
  return null
}
export const Field = ({
  source: _source,
  children, className,
  name: _name,
}: {
  source?: any
  children?: React.ReactNode
  className?: string
  name: string
}) => {
  const name = _name
  const source = useSource()
  const dataTinaField = tinaField(_source || source, name)
  return <div className={className} data-tina-field={dataTinaField}>
    {children}
  </div>
}