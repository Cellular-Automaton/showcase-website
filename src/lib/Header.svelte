<script lang="ts">
  import { page } from '$app/state';
  import { languages, isOfLangType } from '$lib/constants/languages/header';
  import type { Languages } from '$lib/constants/languages/home';
  import { error } from '@sveltejs/kit';
  import logo from '$lib/images/Logo.svg';
  import frflag from '$lib/images/frflag.svg';
  import ukflag from '$lib/images/ukflag.svg';
  import '../global.css';
  import UlRedirect from './components/UlRedirect.svelte';
  import { afterNavigate, goto } from '$app/navigation';
  import { Button } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import StickyDropdown from './components/StickyDropdown.svelte';
  import UlDropdown from './components/UlDropdown.svelte';

  let props = $props();
  let params: string = $state(props.page.url.pathname.slice(3));
  let language: string = $state(page.params?.lang ?? 'en');
  let lang: Languages;

  const updateParams = () => {
    params = page.url.pathname.slice(3);
    language = page.params?.lang ?? 'en';
    lang = language as Languages;

    if (!isOfLangType(lang)) {
      throw error(400);
    }
  };

  onMount(() => {
    updateParams();
    afterNavigate(() => {
      updateParams();
    });
  });
</script>

<div class="header">
  <div class="logo">
    <button
      onclick={() => {
        goto('/' + (page.params?.lang ?? 'en'));
      }}
    >
      <img src={logo} alt="Cami logo" id="cami-logo" />
      <span id="text">CAMI</span>
    </button>
  </div>
  <div class="links-ul">
    <UlRedirect size="larger" header ref={'/' + (page.params?.lang ?? 'en')}>{languages[(page.params?.lang ?? 'en') as Languages].home}</UlRedirect>
    <UlRedirect size="larger" header ref={'/' + language + '/team'}>{languages[(page.params?.lang ?? 'en') as Languages].team}</UlRedirect>
    <!-- NOTE: find a way to expand this outside of header ? -->
    <StickyDropdown title="Documentation">
      <UlDropdown header ref={'/' + language + '/documentation/overview'}>Overview</UlDropdown>
      <UlDropdown header ref={'/' + language + '/documentation/get-started'}>Get started</UlDropdown>
      <UlDropdown header ref={'/' + language + '/documentation/api'}>Api documentation</UlDropdown>
    </StickyDropdown>
  </div>
  <div class="utils">
    {#if language === 'en'}
      <a href={'/fr' + params}><img src={frflag} alt="french flag" class="flag-icon" /></a>
    {/if}
    {#if language === 'fr'}
      <a href={'/en' + params}><img src={ukflag} alt="english flag" class="flag-icon" /></a>
    {/if}
    <Button href={'/' + (page.params?.lang ?? 'en') + '/download'} size="sm" class="text-lg"
      >{languages[(page.params?.lang ?? 'en') as Languages].download}</Button
    >
  </div>
</div>

<style>
  .header {
    position: -webkit-sticky; /* safari */
    position: sticky;
    top: 0;
    background-color: var(--primary-900);
    min-height: 10vh;
    z-index: 20;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 3fr 3fr 2fr;
    margin-bottom: 3vh;
    align-items: center;
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin: 1vh 0 0 4vw;
  }

  .logo button {
    display: flex;
    flex-direction: row;
    gap: 1vw;
  }

  .logo #cami-logo {
    width: 4vw;
    min-width: 60px;
    margin-top: -0.5vh;
  }

  .links-ul {
    display: flex;
    flex-direction: row;
    gap: 1vw;
    margin-left: 3vw;
  }

  .utils {
    display: flex;
    flex-direction: row;
    gap: 1vw;
    align-items: center;
    margin-left: 3vw;
  }

  .flag-icon {
    height: 3vh;
  }

  #text {
    color: var(--primary-200);
    font-size: x-large;
    font-weight: normal;
  }

  #text:hover {
    color: var(--primary-100);
  }
</style>
