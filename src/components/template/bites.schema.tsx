
import { Template } from 'tinacms'

export const schemaBites: Template = {
  name: 'bites',
  fields: [
    {
      name: 'bottom_text',
      type: 'rich-text'
    },
    {
      name: 'item',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item: any) => ({
          key: item.variant,
          label: item.title
        }),
        defaultItem: () => ({
          variant: "One",
          title: "title",
          description: "description",
          image: "image"
        })
      },
      fields: [
        {
          name: 'variant',
          type: 'string',
          options: [
            {
              value: "One",
              label: "one",
            }, {
              value: "Two",
              label: "two"
            }
          ]
        },
        {
          name: 'title',
          type: 'string'
        }, {
          name: 'description',
          type: 'string'
        },
        {
          name: 'image',
          type: 'image'
        },
        {
          name: 'images',
          type: 'image',
          list: true,
        },
        {
          type: "object",
          name: "gallery",
          label: "Images",
          list: true,
          ui: {
            defaultItem: () => ({
              name: "image",
            })
          },
          fields: [
            {
              label: 'Name',
              name: 'name',
              isTitle: true,
              type: "string",
              required: true
            },
            {
              name: 'image',
              type: 'image'
            },
          ]
        }
      ]
    }
  ]
}
export default schemaBites