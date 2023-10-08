import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'AnJoel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    children
  )
}
