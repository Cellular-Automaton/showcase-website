<script lang="ts">
  import { page } from '$app/state';
  import Navbar from 'flowbite-svelte/Navbar.svelte';
  import NavBrand from 'flowbite-svelte/NavBrand.svelte';
  import { NavHamburger, NavUl, NavLi, Button, DarkMode, ButtonGroup, Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
  import { getLocale, setLocale } from '$lib/paraglide/runtime.js';
  import { m } from '$lib/paraglide/messages.js';
  import { GithubSolid } from 'flowbite-svelte-icons';
  import { theme } from '$lib/store/theme.js';
  import { onMount } from 'svelte';

  const languages = [
    {
      flag_path: '/images/frflag.svg',
      locale_name: 'fr'
    },
    {
      flag_path: '/images/ukflag.svg',
      locale_name: 'en'
    }
  ];
  const toggleTheme = () => {
    theme.set($theme === 'light' ? 'dark' : 'light');
  };

  let logo = '/images/cami_logo.svg';
  let { children } = $props();
  let activeUrl = $state(page.url.pathname);

  onMount(() => {
    theme.set(document.getElementsByTagName('html').item(0)?.className ?? 'light');
  });
</script>

<header class="sticky top-0 z-51 w-full flex-none border-b border-gray-200 bg-gray-50 shadow-lg dark:border-gray-600 dark:bg-gray-900">
  <Navbar>
    <NavBrand href="/">
      <img src={logo} alt="Cami logo" class="me-3 h-6 sm:h-9" />
      <span class="text-primary-900 dark:text-primary-50">CAMI</span>
    </NavBrand>
    <NavHamburger class="order-3 m-0 ml-3 lg:hidden" />
    <NavUl
      {activeUrl}
      class="order-1 ml-auto w-full lg:order-0 lg:block lg:w-auto"
      classes={{
        ul: 'flex flex-col lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4'
      }}
    >
      <NavLi class="lg:mb-0 lg:px-2" href="/docs/overview">Docs</NavLi>
      <NavLi class="lg:mb-0 lg:px-2" href="/plugins">Plugins</NavLi>
      <NavLi class="lg:mb-0 lg:px-2" href="/blog">Blog</NavLi>
      <NavLi class="lg:mb-0 lg:px-2" href="/download">{m.header_down()}</NavLi>
      <NavLi class="lg:mb-0 lg:px-2" href="/team">{m.team_title()}</NavLi>
    </NavUl>

    <div class="order-1 ml-auto flex items-center gap-2 lg:order-2">
      <div onclick={toggleTheme} role="none">
        <DarkMode />
      </div>
      <ButtonGroup>
        {#each languages as language}
          <Button
            onclick={async () => await setLocale(language.locale_name)}
            pill
            color={getLocale() === language.locale_name ? 'purple' : 'alternative'}
          >
            <img alt="Language flag" src={language.flag_path} />
          </Button>
        {/each}
      </ButtonGroup>
    </div>
  </Navbar>
</header>

<div class="mb-4 min-h-[81vh] md:mx-auto lg:flex">
  {@render children()}
</div>

<Footer class="absolute z-100 w-full bg-gray-50 dark:bg-gray-800">
  <FooterCopyright href="/" by="CAMI™" year={2025} />
  <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
    <FooterLink href="https://github.com/cellular-automaton"><GithubSolid /></FooterLink>
    <FooterLink href="/">{m.header_about()}</FooterLink>
  </FooterLinkGroup>
</Footer>
