import Event from "@/components/template/event"
import client from "../../../../tina/__generated__/client"

export default async function Page({ params: { handle } }: { params: { handle: string } }) {
  const props = await client.queries.page({ relativePath: 'all.md' })
  return <Event {...props} />
}