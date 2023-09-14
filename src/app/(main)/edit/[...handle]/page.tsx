export default function Page({ params }: { params: { handle: string[] } }) {
  return <div>{params.handle.join('/')}</div>
}