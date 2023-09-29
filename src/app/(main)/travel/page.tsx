import Travel from "@/components/template/travel"

export default async function Page({ params: { handle } }: { params: { handle: string } }) {
  return <Travel />
}