<script lang="ts">
  import { page } from '$app/stores';
  import logo from '$lib/images/Logo.svg';
  import { isOfLangType, languages } from '$lib/constants/languages/header';
  import type { Languages } from '$lib/constants/languages/header';
  import frflag from '$lib/images/frflag.svg';
  import ukflag from '$lib/images/ukflag.svg';
  import { error } from '@sveltejs/kit';
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button } from 'flowbite-svelte';

  $: lang = $page.params?.lang ?? 'en';
  $: language = lang as Languages;
  $: params = $page.url.pathname.slice(3);
  $: if (!isOfLangType(language)) {
    throw error(400);
  }
</script>

<Navbar color="dark" class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b p-0" let:hidden let:toggle>
  <NavBrand href={'/' + lang}>
    <img src={logo} alt="logo" class="logo" />
    <span class="title">CAMI</span>
  </NavBrand>
  <div class="flex md:order-3">
    <div class="flag flex justify-center">
      {#if lang === 'en'}
        <a href={'/fr' + params}><img src={frflag} alt="french flag" class="flag-icon" /></a>
      {/if}
      {#if lang === 'fr'}
        <a href={'/en' + params}><img src={ukflag} alt="english flag" class="flag-icon" /></a>
      {/if}
    </div>
    <Button href={'/' + lang + '/download'} size="sm">Get started</Button>
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {hidden} class="!flex !flex-row !border-0 !p-0">
    <NavLi class='text-lg' href={'/' + lang}>{languages[language].home}</NavLi>
    <NavLi class='text-lg' href={lang + '/team'}>{languages[language].team}</NavLi>
    <!-- <NavLi class='text-lg' > -->
    <!--   <DarkMode {btnClass} /> -->
    <!-- </NavLi> -->
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
