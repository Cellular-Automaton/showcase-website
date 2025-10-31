import { _ } from "svelte-i18n"
import { get } from "svelte/store"

const $_ = get(_)

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
      name: $_('documentation.name'),
      description: $_('documentation.desc'),
      items: [
        {
          path: '/documentation/overview',
          name: $_('overview.name'),
          description: $_('overview.desc'),
        },
        {
          path: '/documentation/plugin',
          name: $_('plugins.name'),
          description: $_('plugins.desc'),
        }
      ]
    }
  ]
  return pages
}
