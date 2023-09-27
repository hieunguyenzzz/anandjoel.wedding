
import { Template } from 'tinacms'

const schemaExplore: Template = {
  name: 'explore',
  fields: [
    {
      name: 'title',
      type: 'string'

    }, {
      name: 'description',
      type: 'string'
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
export default schemaExplore