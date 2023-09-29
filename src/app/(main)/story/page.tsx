import Story from "@/components/template/story"

export default async function Page({ params: { handle } }: { params: { handle: string } }) {
  return <Story />
}