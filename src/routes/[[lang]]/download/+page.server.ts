export const prerender = true;

import type { PageLoad } from './$types';
import { getReleases, type Releases } from '$lib/utils/fetch_releases';


export const load: PageLoad = async () => {
  const releases: Releases[] = await getReleases('CAMI-Desktop');

  return { releases };
};
