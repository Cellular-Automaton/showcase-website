import type { PageServerLoad } from './$types.js';

const json = (r: Response) => r.json();
export const prerender = true;

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const pages = await fetch('/api/docs').then(json);
    return { pages };
  } catch (error) {
    console.error("Error happened at '/': ${error}");
  }
};
