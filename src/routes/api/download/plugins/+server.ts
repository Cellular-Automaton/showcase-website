import { json } from '@sveltejs/kit';
import { getReleases, type Releases, type ReleaseHolder } from '../../../utils/releases.js';

export const GET = async () => {
  const releases_lenia: Releases[] = await getReleases('Lenia');
  const releases_mc: Releases[] = await getReleases('MultiCouple');
  const releases_mch: Releases[] = await getReleases('MultiChannel');
  const releases_gol: Releases[] = await getReleases('GameOfLife');
  const plugins: ReleaseHolder[] = [
    {
      name: 'Lenia',
      releases: releases_lenia
    },
    {
      name: 'MultiCouple',
      releases: releases_mc
    },
    {
      name: 'MultiChannel',
      releases: releases_mch
    },
    {
      name: 'Game of Life',
      releases: releases_gol
    }
  ];

  return json(plugins);
};
