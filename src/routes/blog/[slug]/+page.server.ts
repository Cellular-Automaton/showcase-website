import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const postFiles = import.meta.glob('/src/posts/blog/*.md');
  const postPath = `/src/posts/blog/${params.slug}.md`;
  const post = await postFiles[postPath]();

  return {
    ...post.metadata,
  };
};
