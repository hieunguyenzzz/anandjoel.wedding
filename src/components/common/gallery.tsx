"use client"

import Image from "./image"

export function GalleryOpenButton({ id, children, className }: { id: string, chldren?: React.ReactNode, className: string }) {
  return <button className={className} onClick={() => document.getElementById(id).showModal()}>{children}</button>
}
export default function Gallery({ id, title, description, images = [] }: { id: string, title: string, description: string, images: string[] }) {
  return <>
    <dialog id={id} className="modal modal-bottom ">
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
      <div className="modal-box">
        <div className="font-bold text-lg font-title">{title}</div>
        <p className="pb-4 font-subtitle italic">{description}</p>
        <div className="min-h-[calc(100vh-100px)] gap-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            images.map((image, index) => {
              return <div key={index} className="relative">
                <div className='w-full pt-[100%] bg-gray-50 relative'>
                  {image && <Image src={image} fill alt={title || ''} className='object-cover absolute inset-0' />}
                </div>
              </div>
            })
          }
        </div>
        <div className="modal-action sticky bottom-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </>
}