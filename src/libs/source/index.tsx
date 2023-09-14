"use client"
import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

const sourceCotnext = createContext({})
export const useSource = () => {
  return useContext(sourceCotnext)[0]
}
export const useSetSource = () => {
  return useContext(sourceCotnext)[1]
}
const SourceProvider: FC<PropsWithChildren> = ({ children }) => {
  return <sourceCotnext.Provider value={useState({})}>
    {children}
  </sourceCotnext.Provider>
}
export default SourceProvider