<script lang="ts">
  import { page } from '$app/stores';
  import logo from '$lib/images/Logo.svg';
  import { isOfLangType, languages } from '$lib/constants/languages/header';
  import type { Languages } from '$lib/constants/languages/header';
  import frflag from '$lib/images/frflag.svg';
  import ukflag from '$lib/images/ukflag.svg';
  import { error } from '@sveltejs/kit';
  import { Navbar, NavBrand, NavLi, Button, Dropdown, DropdownItem, DarkMode, NavUl } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';

  $: lang = $page.params?.lang ?? 'en';
  $: activeUrl = $page.url.pathname;
  $: language = lang as Languages;
  $: params = $page.url.pathname.slice(3);
  $: if (!isOfLangType(language)) {
    throw error(400);
  }
</script>

<Navbar color="dark" class="fixed start-0 top-0 z-20 w-full border-b p-0" let:hidden>
  <NavBrand href={'/' + lang}>
    <img src={logo} alt="logo" class="logo" />
    <span class="title">CAMI</span>
  </NavBrand>
  <div class="flex space-x-3 md:order-3">
    <div class="flag flex justify-center">
      {#if lang === 'en'}
        <a href={'/fr' + params}><img src={frflag} alt="french flag" class="flag-icon" /></a>
      {/if}
      {#if lang === 'fr'}
        <a href={'/en' + params}><img src={ukflag} alt="english flag" class="flag-icon" /></a>
      {/if}
    </div>
    <DarkMode hidden />
    <Button href={'/' + lang + '/download'} size="sm" class="text-lg">{languages[language].download}</Button>
  </div>
  <NavUl {hidden} class="!flex" {activeUrl}>
    <NavLi class="text-lg" href={'/' + lang}>{languages[language].home}</NavLi>
    <NavLi class="text-lg" href={'/' + lang + '/team'}>{languages[language].team}</NavLi>
    <NavLi class="cursor-pointer text-lg">
      {languages[language].dropdown}<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
      <Dropdown color="dark">
        <DropdownItem href={'/' + lang + '/documentation/overview'}>{languages[language].item1}</DropdownItem>
        <DropdownItem href={'/' + lang + '/documentation/get-started'}>{languages[language].item2}</DropdownItem>
        <DropdownItem href={'/' + lang + '/documentation/plugins'}>{languages[language].item3}</DropdownItem>
      </Dropdown>
    </NavLi>
  </NavUl>
</Navbar>

<style scoped>
  .title {
    padding-left: 1vw;
    align-self: center;
    font-weight: bold;
    font-size: 3vh;
    color: #6956e5;
  }

  .logo {
    width: 4vw;
    min-width: 3vw;
    min-height: 2vh;
    position: relative;
  }

  .flag {
    max-width: 3vw;
    padding-right: 1vw;
    margin-top: 0.5vh;
  }
  .flag-icon {
    height: 3vh;
  }
</style>
