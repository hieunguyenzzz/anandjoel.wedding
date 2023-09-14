import Bites from "@/components/template/bites"
import Event from "@/components/template/event"
import client from "../../../../tina/__generated__/client"
import { PageBlocksBites } from "../../../../tina/__generated__/types"

export default async function Page({ params }: { params: { handle: string } }) {
  const { data } = await client.queries.page({ relativePath: 'all.md' })
  switch (params.handle) {
    case 'all':
      return <div>all</div>
    case 'event':
      return <Event />
    case 'bites':
      return <div className='col-span-2' ><Bites data={data.page.blocks?.find(item => item?.__typename === 'PageBlocksBites') as PageBlocksBites} /></div>
    case 'edit':
      return <div>edit</div>
    default:
      return <div>404</div>
  }
}