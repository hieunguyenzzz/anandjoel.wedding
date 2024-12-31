import Event from "@/components/template/event"
import { redirect } from "next/navigation"

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  return redirect(`/${locale}/story/event`)
}