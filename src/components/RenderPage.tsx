"use client";

import { useSetSource } from "@/libs/source";
import { Field } from "@/libs/tina";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../tina/__generated__/types";
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

  return <>
    {
      data.page.blocks?.map((item, index) => {
        if (item?.__typename === 'PageBlocksBites') {
          return <Bites data={item} />
        }
        if (item?.__typename === 'PageBlocksContent') {
          if (item?.name === 'event') {
            return <Field name={`blocks.${index}.name`}><Event data={item} /></Field>
          }
        }

        return null
      })
    }
  </>
}