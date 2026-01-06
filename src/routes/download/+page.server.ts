import type { PageServerLoad } from '../$types.js';

const json = (r: Response) => r.json();
export const prerender = true;

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const releases = await fetch('/api/download/desktop').then(json);

    return { releases: releases };
  } catch (error) {
    console.error("Error happened at '/': ${error}");
  }
};
