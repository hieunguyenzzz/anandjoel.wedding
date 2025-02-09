import { defineConfig } from "tinacms";
import schemaBites from '../src/components/template/bites.schema';
import schemaExplore from "../src/components/template/explore.schema";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_ID || '3a743d97-a554-4b19-acc5-85219789c469', // Get this from tina.io
  token: process.env.TINA_TOKEN || 'ddc47712a8deeab739818ce91d5400c23320a42e', // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_TOKEN_SEARCH || '1bb332d611d8e21fde7d23d3eefae78dce06045a',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: 'Event',
        path: "content/event",
        format: "json",
        fields: [{
          name: 'name',
          type: "string",
          required: true,
          isTitle: true,
        }, {
          name: 'title',
          type: "string",
        }, {
          name: 'description',
          type: "string",
        }, {
          name: 'video_url',
          type: "string",
        }, {
          type: "object",
          name: "fields",
          list: true,
          ui: {
            itemProps: (item) => ({
              ...item,
              label: item.title || item.name || item.variant,
            }),
          },
          fields: [
            {
              name: 'name',
              type: "string",
            },
            {
              name: 'en',
              type: "rich-text",
              templates: [
                {
                  "name": "Link",
                  fields: [
                    {
                      name: 'href',
                      type: "string",
                    },
                    {
                      name: 'text',
                      type: "string",
                    }
                  ]
                }
              ]
            },
            {
              name: 'images',
              type: "image",
              list: true,
            }
          ]
        },],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            name: 'blocks',
            type: 'object',
            list: true,

            templates: [
              schemaBites,
              schemaExplore,
              {
                name: 'content',
                ui: {
                  itemProps: (item) => ({
                    ...item,
                    label: item.title || item.name,
                  }),
                },
                fields: [{
                  name: 'name',
                  type: "string",
                  required: true,
                  isTitle: true,
                }, {
                  name: 'title',
                  type: "string",
                }, {
                  name: 'description',
                  type: "string",
                }, {
                  type: "object",
                  name: "fields",
                  list: true,
                  ui: {
                    itemProps: (item) => ({
                      ...item,
                      label: item.title || item.name || item.variant,
                    }),
                  },
                  fields: [
                    {
                      name: 'variant',
                      type: "string",
                      options: ["Title", "Text", "Images", "Images_1_1", "Image_1_2", "Image_2_1", "Text_Image", "Images_6", "B1", "B2", "B3", "B4", "B5", "B6", "B7"],
                    },
                    {
                      name: 'name',
                      type: "string",
                    },
                    {
                      name: 'en',
                      type: "rich-text",
                      templates: [
                        {
                          "name": "Link",
                          fields: [
                            {
                              name: 'href',
                              type: "string",
                            },
                            {
                              name: 'text',
                              type: "string",
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'images',
                      type: "image",
                      list: true,
                    }
                  ]
                },],
              },
              {
                name: 'Event',
                ui: {
                  itemProps: (item) => ({
                    ...item,
                    label: item.title || item.name,
                  }),
                },
                fields: [{
                  name: 'name',
                  type: "string",
                  required: true,
                  isTitle: true,
                }, {
                  name: 'title',
                  type: "string",
                }, {
                  name: 'description',
                  type: "string",
                }, {
                  name: 'video_url',
                  type: "string",
                }, {
                  type: "object",
                  name: "fields",
                  list: true,
                  ui: {
                    itemProps: (item) => ({
                      ...item,
                      label: item.title || item.name || item.variant,
                    }),
                  },
                  fields: [
                    {
                      name: 'name',
                      type: "string",
                    },
                    {
                      name: 'en',
                      type: "rich-text",
                      templates: [
                        {
                          "name": "Link",
                          fields: [
                            {
                              name: 'href',
                              type: "string",
                            },
                            {
                              name: 'text',
                              type: "string",
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'images',
                      type: "image",
                      list: true,
                    }
                  ]
                },],
              }]
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/`,
        },
      },
    ],
  },
});
