<script lang="ts">
  import { page } from '$app/stores';
  import { languages, isOfLangType } from '$lib/constants/languages/team';
  import type { Languages } from '$lib/constants/languages/team';
  import { error } from '@sveltejs/kit';
  import { Avatar, Button, Card } from 'flowbite-svelte';
  import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';

  $: language = $page.params?.lang ?? 'en';
  $: lang = language as Languages;

  $: if (!isOfLangType(language)) {
    throw error(400);
  }
</script>

<svelte:head>
  <title>CAMI</title>
</svelte:head>

<!--  eslint-disable svelte/no-at-html-tags -->
<div>
  <div class="container">
    <div class="homepage">
      <h1>{languages[lang].title1}</h1>
      <p>Passionate open-source developpers</p>
      <br/>
      <div class="cards">
        <div class="subcards">
          <Card padding="md" color="dark">
            <div class="flex flex-col items-center pb-4">
              <Avatar size="lg" src="https://avatars.githubusercontent.com/u/91675046?v=4" />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Édouard Pradie</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">{languages[lang].doudou}</span>
              <div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
                <Button href="https://github.com/EdouardPradie/" target="_blank">
                  <GithubSolid class="me-2 h-5 w-5" />
                  Github
                </Button>
                <Button color="blue" class="dark:text-white" href="https://www.linkedin.com/in/edouard-pradie-bb7121237/" target="_blank">
                  <LinkedinSolid class="me-2 h-5 w-5" />
                  Linkedin
                </Button>
              </div>
            </div>
          </Card>
          <Card padding="md" color="dark">
            <div class="flex flex-col items-center pb-4">
              <Avatar size="lg" src="https://avatars.githubusercontent.com/u/91676343?v=4" />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Louis Bassagal</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">{languages[lang].louis}</span>
              <div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
                <Button href="https://github.com/LouisBassagal" target="_blank">
                  <GithubSolid class="me-2 h-5 w-5" />
                  Github
                </Button>
                <Button color="blue" class="dark:text-white" target="_blank" href="https://www.linkedin.com/in/louis-bassagal/">
                  <LinkedinSolid class="me-2 h-5 w-5" />
                  Linkedin
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div class="subcards">
          <Card padding="md" color="dark">
            <div class="flex flex-col items-center pb-4">
              <Avatar size="lg" src="https://avatars.githubusercontent.com/u/91691407?v=4" />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sam Florentin</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">{languages[lang].nah}</span>
              <div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
                <Button href="https://github.com/SamuelFlorentin/" target="_blank">
                  <GithubSolid class="me-2 h-5 w-5" />
                  Github
                </Button>
                <Button color="blue" class="dark:text-white" target="_blank" href="https://www.linkedin.com/in/samuel-florentin-989138234/">
                  <LinkedinSolid class="me-2 h-5 w-5" />
                  Linkedin
                </Button>
              </div>
            </div>
          </Card>
          <Card padding="md" color="dark">
            <div class="flex flex-col items-center pb-4">
              <Avatar size="lg" src="https://avatars.githubusercontent.com/u/91676399?v=4" />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Luka Camus</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">{languages[lang].luka}</span>
              <div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
                <Button href="https://github.com/Lukacms/" target="_blank">
                  <GithubSolid class="me-2 h-5 w-5" />
                  Github
                </Button>
                <Button color="blue" class="dark:text-white" target="_blank" href="https://www.linkedin.com/in/luka-camus-7816b622b/">
                  <LinkedinSolid class="me-2 h-5 w-5" />
                  Linkedin
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    color: theme('colors.primary.10');
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    color: theme('colors.primary.50');
  }

  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80vw;
    gap: 3vh;
    text-align: center;
  }

  .cards {
    display: flex;
    gap: 1vh;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

  .subcards {
    display: flex;
    gap: 1vw;
    flex-direction: row;
    justify-items: center;
    align-items: center;
  }
</style>
