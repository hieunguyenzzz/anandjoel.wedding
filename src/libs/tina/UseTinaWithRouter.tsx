"use client"
import { useEffect, useState } from "react"
import { useTina } from "tinacms/dist/react"
import client from "../../../tina/__generated__/client"
import { Exact, FullQuery, PageQuery } from "../../../tina/__generated__/types"
import { useSetSource, useSource } from '../source'
export const UseTinaWithRouter = (props:{
  data: FullQuery,
  variables: Exact<{ relativePath: string }>,
  query: string
}) => {
  props
  return <UseTina {...props}>
  </UseTina>
}
export const UseTina = (props: {
  data: FullQuery,
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