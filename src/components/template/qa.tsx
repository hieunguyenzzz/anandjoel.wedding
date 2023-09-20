
"use client";
import Image from '@/components/common/image';
import appleOpen from '../../../public/apple-open.png';
import apple from '../../../public/apple.png';
import bgImage from '../../../public/qa_bg.png';
import { PageBlocksContent } from '../../../tina/__generated__/types';

import { useSource } from '@/libs/source';
import { Field } from "@/libs/tina";
const temp = {
  "type": "root",
  "children": [
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "When should we arrive in Vietnam?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "We suggest sometime during the week of the wedding, maybe 3 – 4 days prior to the wedding date to get over jet lag. "
        }
      ]
    },
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "Will the ceremony, and reception take place indoors or outdoors?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "Outdoors, so please plan accordingly. The temperature in December is usually cool ranging from 20 –  26 Celsius (60 – 72 Fahrenheit). "
        }
      ]
    },
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "Since the ceremony takes place at the Tree of Life and the reception at the Tree of Knowledge, how can we travel there?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "Shuttle buses will be provided between the two venues. And also from and to the airport."
        }
      ]
    },
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "Can I take photos during the ceremony?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "We will have a professional photography team at the wedding but if you want to snap some memories of our special weekend, we kindly ask that you keep photos to a minimum at the ceremony."
        }
      ]
    },
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "Is it ok to bargain pricing and if so, when/where?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "It may come as a culture shock to some but bargaining in Vietnam for any type of goods is commonplace. Bartering comes down to fine art. This is mainly in the markets (unless there are signs that say fixed price). May the odds forever be in your favor!"
        }
      ]
    },
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "What is the tipping culture in Vietnam?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "Tipping isn’t mandatory or customary in Vietnam, but it is always appreciated. If you’re happy with the services provided by waiters, drivers and other service workers, leaving a small tip is a good way to show your appreciation. We recommend 10% as a ballpark."
        }
      ]
    },
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "How do things normally cost in Vietnam?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": " "
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "For accommodation, a 4-star hotel or above, on average, is $200/day. Food & drinks will be $100/day on average if you want to try a lot of different things (street foods / desserts / restaurants / coffee shops / etc.). If you go to clubs or some cool events or concert/rave or go to bars, it will be $200 – $500 for a week or so."
        }
      ]
    },
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "Are children allowed at the ceremony?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": " "
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "Due to small venue and limitation, children age 12 or below are not allowed at the ceremony."
        }
      ]
    },
    {
      "type": "h3",
      "children": [
        {
          "type": "text",
          "text": "What food will be served at the reception?"
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": " "
        }
      ]
    },
    {
      "type": "p",
      "children": [
        {
          "type": "text",
          "text": "Western food with Vietnamese influence."
        }
      ]
    }
  ]
} as const
export function QAContent({ data }: { data: PageBlocksContent }) {
  let ratio = (bgImage.height / bgImage.width) * 100;

  return (
    <div className="min-h-screen text-[12px] lg:text-lg relative isolate text-[#111111ff] flex flex-col gap-6">
      <div style={{
        minHeight: ratio + 'vw',
      }} className='py-[4vw]  pb-[10vw] gap-[10vw] flex flex-col relative justify-center '>
        <Image src={bgImage} priority placeholder='blur' className='fixed -z-10 inset-0 w-full h-full max-w-full object-cover animate-fade' />
        <div className="join join-vertical w-full  prose mx-auto text-[12px] lg:text-[min(2vw,20px)] whitespace-pre-wrap font-title prose-h3:font-title prose-p:my-[0.3em] prose-img:m-auto prose-h3:py-1 prose-h3:text-[1.4em] prose-h3:font-bold">
          {
            data.fields?.flatMap((item, x) => {
              return item?.en?.children?.reduce((result: { h3: string, text: string }[] = [], item: any,) => {
                console.log({ result })
                if (item.type === 'h3') {
                  result.push({ h3: item.children[0].text, text: '' })
                }
                if (item.type === 'p') {
                  result[result.length - 1].text += item.children[0].text
                }
                return result
              }, []).map((item: { h3: string, text: string }, i: number) => {
                return <div key={i} className="collapse  join-item border-b border-[#ceaabb]">
                  <input type="checkbox" name="my-accordion-4" className='peer' defaultChecked={i === 0} />
                  <Image src={apple} width={40} height={40} className='visible h-[67px] peer-checked:invisible absolute lg:h-[84px] animate-fade object-scale-down  right-0 top-0 ' />
                  <Image src={appleOpen} width={44} height={44} className='hidden absolute h-[67px] lg:h-[84px] animate-jump object-scale-down right-0 top-0  peer-checked:block' />
                  <div className="collapse-title flex gap6 justify-between ">
                    <h3 className='m-0'>
                      {item.h3}
                    </h3>
                    <div className='w-[84px]' />
                  </div>
                  <div className="collapse-content">
                    <p>{item.text}</p>
                  </div>
                </div>
              })
            })
          }

        </div>
      </div>
    </div>
  )
}
export default function QA() {
  const source = useSource();
  let index = source?.blocks?.findIndex((item: any) => {
    console.log({ item })
    return item?.__typename === 'PageBlocksContent' && item?.name === 'qa'
  })
  const data = source?.blocks[index]
  return <Field name={`blocks.${index}.name`}><QAContent data={data} /></Field>
}
