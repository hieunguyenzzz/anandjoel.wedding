import Event from "@/components/template/event"

export default async function Page({ params: { handle } }: { params: { handle: string } }) {
  return <Event />
}