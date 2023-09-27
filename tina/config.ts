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
        name: "page",
        label: "Pages",
        // format: "json",
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
            ui: {
              itemProps: (item) => ({
                label: item.title || item.name,
              }),
            },
            templates: [
              schemaBites,
              schemaExplore,
              {
                name: 'content',
                fields: [{
                  name: 'name',
                  type: "string",
                  required: true,
                  isTitle: true,
                }, {
                  type: "object",
                  name: "fields",
                  list: true,
                  fields: [
                    {
                      name: 'name',
                      isTitle: true,
                      type: "string",
                      required: true
                    },
                    {
                      name: 'en',
                      type: "rich-text",
                    },
                  ]
                },],
              }]
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/${document._sys.filename}`,
        },
      },
    ],
  },
});
