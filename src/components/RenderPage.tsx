"use client";

import { useSetSource } from "@/libs/source";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTina } from "tinacms/dist/react";
import { PageBlocksBites, PageQuery } from "../../tina/__generated__/types";
import Bites from "./template/bites";
import Event from "./template/event";

export function RenderPage(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const pathname = usePathname();
  console.log({ pathname })
  const { data } = useTina(props);
  const setSource = useSetSource()
  useEffect(() => {
    setSource(data.page)
  }, [data])
  switch (pathname) {
    case '/all':
      return <div>all</div>
    case '/event':
      return <Event />
    case '/bites':
      return <Bites data={data.page.blocks?.find(item => item?.__typename === 'PageBlocksBites') as PageBlocksBites} />
    case '/edit':
      return <div>edit</div>
    default:
      return <div>404</div>
  }
}