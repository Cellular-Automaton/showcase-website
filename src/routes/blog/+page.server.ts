import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const postFiles = import.meta.glob('/src/posts/blog/*.md');
  const posts = await Promise.all(
    Object.entries(postFiles).map(async ([path, resolver]) => {
      const post = await resolver();
      const metadata = post.metadata;

      const slug = metadata.slug ||
        path.split('/').pop()?.replace('.md', '') ||
        metadata.title.toLowerCase().replace(/\s+/g, '-');

      return { ...metadata, slug };
    })
  );
  return { posts };
};
