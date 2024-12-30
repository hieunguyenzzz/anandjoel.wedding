"use client"
import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { Event, FullQuery } from "../../../tina/__generated__/types";
type Source = FullQuery["page"]
type SourceCotnext = {
  source: Source
  event: FullQuery['Event']
  setSource: (source: Source) => void
}
const sourceCotnext = createContext<SourceCotnext>({} as SourceCotnext)
export const useSource = () => {
  return useContext(sourceCotnext)?.source
}
export const useEvent = () => {
  return useContext(sourceCotnext)?.event
}
export const useSetSource = () => {
  return useContext(sourceCotnext)?.setSource
}
const SourceProvider: FC<PropsWithChildren & {
  defaultsource: FullQuery
}> = ({ children, defaultsource }) => {
  const [source, setSource] = useState<Source>(defaultsource.page as Source)
  const [event] = useState(defaultsource.Event)
  return <sourceCotnext.Provider value={{ source: source, setSource,event }}>
    {children}
  </sourceCotnext.Provider>
}
export default SourceProvider