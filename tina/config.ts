import { defineConfig } from "tinacms";
import schemaBites from '../src/components/template/bites.schema';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: '',
  token: '',
  // clientId: '3a743d97-a554-4b19-acc5-85219789c469', // Get this from tina.io
  // token: 'ddc47712a8deeab739818ce91d5400c23320a42e', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  search: {
    tina: {
      indexerToken: '',
      // indexerToken: '1bb332d611d8e21fde7d23d3eefae78dce06045a',
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
              {
                name: 'content',
                fields: [{
                  type: "object",
                  name: "fields",
                  label: "Title",
                  list: true,
                  fields: [
                    {
                      label: 'Name',
                      name: 'name',
                      isTitle: true,
                      type: "string",
                      required: true
                    },
                    {
                      label: 'EN',
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
          router: ({ document }) => `/edit/page/${document._sys.filename}`,
        },
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
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
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/edit/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
