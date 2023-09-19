import { RenderPage } from "@/components/RenderPage"
import client from "../../../../tina/__generated__/client"

export default async function Page({ params: { handle } }: { params: { handle: string } }) {
  const props = await client.queries.page({ relativePath: 'all.md' })
  return <RenderPage {...props} />
}