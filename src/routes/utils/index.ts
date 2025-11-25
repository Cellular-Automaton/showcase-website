import { m } from "$lib/paraglide/messages.js"

export type PageEntry = {
  path: string,
  name: string,
  description: string
}

export type PageTitleEntry = {
  name: string,
  description: string
  items: PageEntry[],
}

export const fetchDocumentationPages = () => {
  const pages: PageTitleEntry[] = [
    {
      name: m["documentation.name"](),
      description: m["documentation.desc"](),
      items: [
        {
          path: '/docs/overview',
          name: m["overview.name"](),
          description: m["overview.desc"](),
        },
        {
          path: '/docs/plugin',
          name: m["plugins.name"](),
          description: m["plugins.desc"](),
        }
      ]
    }
  ]
  return pages
}
