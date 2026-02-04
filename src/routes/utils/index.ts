import { m } from '$lib/paraglide/messages.js';

export type PageEntry = {
  path: string;
  name: string;
  description: string;
};

export type PageTitleEntry = {
  name: string;
  description: string;
  items: PageEntry[];
};

export const fetchDocumentationPages = () => {
  const pages: PageTitleEntry[] = [
    {
      name: m['documentation.name'](),
      description: m['documentation.desc'](),
      items: [
        {
          path: '/docs/overview',
          name: m['overview.name'](),
          description: m['overview.desc']()
        },
        {
          path: '/docs/algorithms',
          name: m['plugins.name'](),
          description: m['plugins.desc']()
        },
        {
          path: '/docs/visuals',
          name: m.visual_name(),
          description: m.visual_desc()
        },
        {
          path: '/docs/cli',
          name: m.cli_name(),
          description: m.cli_desc()
        }
      ]
    }
  ];
  return pages;
};
