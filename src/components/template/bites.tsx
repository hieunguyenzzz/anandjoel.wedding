import { Field } from "@/libs/tina";
import { PageBlocksBites } from "../../../tina/__generated__/types";

export default function Bites({ data }: { data: PageBlocksBites }) {
  if (!data) return null
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
      {
        data.item?.map((item, index) => {
          if (item?.variant === "Two") {
            return <Field key={index} className='col-span-2' name={`blocks.0.item.${index}.title`}>
              <div className='w-full h-full bg-gray-100 opacity-50 pt-[50%]'></div>
            </Field>
          }
          return <Field key={index} name={`blocks.0.item.${index}.title`}>
            <div className='w-full pt-[100%]  opacity-50 bg-gray-100'></div>
          </Field>
        })
      }
    </div>
  )
}
