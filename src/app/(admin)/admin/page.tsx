import { redirect } from "next/navigation"

export default function Home() {
  redirect('/admin/index.html')
  return null
}
