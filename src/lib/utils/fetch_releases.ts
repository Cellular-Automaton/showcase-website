import axios from "axios";
import { GITHUB_KEY } from '$env/static/private';
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

export type Releases = {
  name: string,
  tag: string,
  url: string,
  released: string,
  windows: GithubAsset[];
  linux: GithubAsset[];
};

export async function getReleases(repoName: string) {
  var releases: Releases[] = [];
  await axios
    .get<GithubResponse>(`https://api.github.com/repos/Cellular-Automaton/${repoName}/releases`, {
      headers: {
        Authorization: `Bearer ${GITHUB_KEY}`
      }
    })
    .then((data) => {
      data.data?.forEach((item) => {
        releases.push({ windows: [], linux: [], name: item.name, tag: item.tag_name, released: item.published_at, url: item.html_url });
        item.assets.forEach((asset) => {
          if (asset.name.includes('windows')) {
            releases.at(-1)?.windows.push(asset);
          } else if (asset.name.includes('linux')) {
            releases.at(-1)?.linux.push(asset);
          }
        });
      });
    })
    .catch((err) => {
      console.log(err.message)
      redirect(308, '/error');
    });
  releases = releases.filter((item) => item.linux.length > 0 || item.windows.length > 0)

  return releases;

}


