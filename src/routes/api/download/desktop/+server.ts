import { json } from '@sveltejs/kit';
import { getReleases, type Releases } from '../../../utils/releases.js';

export const GET = async () => {
  const releases: Releases[] = await getReleases('CAMI-Desktop');

  return json(releases);
};
