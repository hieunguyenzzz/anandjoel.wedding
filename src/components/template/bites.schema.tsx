
import { Template } from 'tinacms'

export const schemaBites: Template = {
  name: 'bites',
  fields: [
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
      ]
    }
  ]
}
export default schemaBites