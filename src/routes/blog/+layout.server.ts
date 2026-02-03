import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ params }) => {
  return {
    slug: params.slug
  };
};
