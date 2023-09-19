"use client"
import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { PageQuery } from "../../../tina/__generated__/types";
type Source = PageQuery["page"]
type SourceCotnext = {
  source: Source
  setSource: (source: Source) => void
}
const sourceCotnext = createContext<SourceCotnext>({} as SourceCotnext)
export const useSource = () => {
  return useContext(sourceCotnext)?.source
}
export const useSetSource = () => {
  return useContext(sourceCotnext)?.setSource
}
const SourceProvider: FC<PropsWithChildren & {
  defaultsource: PageQuery
}> = ({ children, defaultsource }) => {
  const [source, setSource] = useState<Source>(defaultsource.page as Source)
  return <sourceCotnext.Provider value={{ source: source, setSource }}>
    {children}
  </sourceCotnext.Provider>
}
export default SourceProvider