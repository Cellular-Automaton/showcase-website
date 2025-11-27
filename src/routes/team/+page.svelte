<script lang="ts">
  import { Card, Avatar, Button, Heading, P, Span, Hr } from 'flowbite-svelte';
  import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
  import { m } from '$lib/paraglide/messages.js';
</script>

<div class="top-0 mt-4 flex flex-col">
  <div class="flex flex-col items-center gap-3">
    <Heading tag="h1"><Span class="text-primary-800 dark:text-primary-400">{m.team_title()}</Span></Heading>
    <P>{m.team_desc()}</P>
  </div>
  <Hr />
  <div class="flex flex-col items-center justify-stretch gap-3">
    <div class="flex flex-row justify-stretch gap-4">
      <Card size="lg" class="pd-5 sm:p-8 md:p-10">
        <div class="flex flex-col items-center">
          <Avatar size="lg" src="https://avatars.githubusercontent.com/u/91675046?v=4" />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Édouard Pradie</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{m.team_doudou()}</span>
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
      <Card size="lg" class="pd-5 sm:p-8 md:p-10">
        <div class="flex flex-col items-center">
          <Avatar size="lg" src="https://avatars.githubusercontent.com/u/91676343?v=4" />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Louis Bassagal</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{m.team_louis()}</span>
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
    <div class="flex flex-row gap-4">
      <Card size="lg" class="pd-5 sm:p-8 md:p-10">
        <div class="flex flex-col items-center">
          <Avatar size="lg" src="https://avatars.githubusercontent.com/u/91691407?v=4" />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sam Florentin</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{m.team_aria()}</span>
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
      <Card size="lg" class="pd-5 sm:p-8 md:p-10">
        <div class="flex flex-col items-center">
          <Avatar size="lg" src="https://avatars.githubusercontent.com/u/91676399?v=4" />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Luka Camus</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{m.team_lukac()}</span>
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
