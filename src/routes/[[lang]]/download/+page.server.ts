export const prerender = true;

import { GITHUB_KEY } from '$env/static/private';
import axios from 'axios';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

type GithubAsset = {
  url: string;
  browser_download_url: string;
  id: number;
  name: string;
  content_type: string;
  size: number;
};

type GithubBody = {
  url: string;
  assets_url: string;
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  body: string;
  id: number;
  assets: GithubAsset[];
};

type GithubResponse = {
  data: GithubBody[];
};

type Releases = {
  name: string,
  tag: string,
  url: string,
  released: string,
  windows: GithubAsset[];
  linux: GithubAsset[];
};

export const load: PageLoad = async () => {
  const releases: Releases[] = [];
  await axios
    .get<GithubResponse>('https://api.github.com/repos/Cellular-Automaton/CAMI-Desktop/releases', {
      headers: {
        Authorization: `Bearer ${GITHUB_KEY}`
      }
    })
    .then((data) => {
      data.data?.forEach((item) => {
        releases.push({windows: [], linux: [], name: item.name, tag: item.tag_name, released: item.published_at, url: item.html_url});
        item.assets.forEach((asset) => {
          if (asset.name.endsWith('exe')) {
            releases.at(-1)?.windows.push(asset);
          } else if (asset.name.endsWith('rpm') || asset.name.endsWith('deb')) {
            releases.at(-1)?.linux.push(asset);
          }
        });
      });
    })
    .catch((err) => {
      console.log(err.message)
      redirect(404, '/error');
    });

  return { releases };
};
