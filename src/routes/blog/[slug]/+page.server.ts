import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const postFiles = import.meta.glob('/src/posts/blog/*.md');
    const postPath = `/src/posts/blog/${params.slug}.md`;
    const post = await postFiles[postPath]();

    return {
      ...post.metadata
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};
