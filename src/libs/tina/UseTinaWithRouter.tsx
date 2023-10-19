"use client"
import { useEffect, useState } from "react"
import { useTina } from "tinacms/dist/react"
import client from "../../../tina/__generated__/client"
import { Exact, PageQuery } from "../../../tina/__generated__/types"
import { useSetSource, useSource } from '../source'
export const UseTinaWithRouter = ({ relativePath }: { relativePath: string }) => {
  const [tinaData, setTinadata] = useState<{
    data: PageQuery,
    variables: Exact<{ relativePath: string }>,
    query: string
  } | null | undefined>()
  useEffect(() => {
    client.queries.page({ relativePath }).then((data) => {
      setTinadata(data)
    })
  }, [])
  if (!tinaData) return null
  return <UseTina {...tinaData}>
  </UseTina>
}
export const UseTina = (props: {
  data: PageQuery,
  variables: Exact<{ relativePath: string }>,
  query: string
}) => {
  const source = useSource()
  const {
    data,
  } = useTina(props)
  const setSource = useSetSource()
  useEffect(() => {
    setSource(data.page)
  }, [data.page && JSON.stringify(data.page) !== JSON.stringify(source)])
  return null
}
export default UseTinaWithRouter