import SourceProvider from '@/libs/source'
import { UseTinaWithRouter } from '@/libs/tina'
import client from '../../../tina/__generated__/client'

const getrelativePath = (locale: string) => {
  switch (locale) {
    case 'en':
      return 'all.md'
    case 'vi':
      return 'all.vi.md'
    default:
      return 'all.md'
  }
}
export default async function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const props = await client.queries.page({ relativePath: getrelativePath(locale) })
  return (
    <SourceProvider defaultsource={props.data}>
      <UseTinaWithRouter relativePath={props.variables.relativePath} />
      {children}
    </SourceProvider>
  )
}
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'vi' }
  ]
}