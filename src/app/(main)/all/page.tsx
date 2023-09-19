
import client from '../../../../tina/__generated__/client'
export default async function All() {
  const { data } = await client.queries.page({ relativePath: 'all.md' })
  return <p className='' dangerouslySetInnerHTML={{ __html: JSON.stringify({ data }, null, 2) }}>
  </p>
}
