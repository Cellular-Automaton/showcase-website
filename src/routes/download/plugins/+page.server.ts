import type { PageServerLoad } from '../$types.js';

const json = (r: Response) => r.json();
export const prerender = false;

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const releases = await fetch('/api/download/plugins').then(json);

    return { releases: releases };
  } catch (error) {
    console.error("Error happened at '/': ${error}");
  }
};
