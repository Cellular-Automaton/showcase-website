<script lang="ts">
  import { page } from '$app/stores';
  import logo from '$lib/images/Logo.svg';
  import { languages, isOfLangType } from '$lib/constants/languages';
  import type { Languages } from '$lib/constants/languages';
  import frflag from '$lib/images/frflag.svg';
  import ukflag from '$lib/images/ukflag.svg';
  import { error } from '@sveltejs/kit';

  $: lang = $page.params?.lang ?? 'en';
  $: language = lang as Languages;
  $: params = $page.url.pathname.slice(3);
  function onClick() {
    // TODO: need to change url to visualizer
    window.open('http://www.duckduckgo.com', '_blank');
  }

  $: if (!isOfLangType(language)) {
    throw error(400);
  }
</script>

<header class="d-flex flex-column container-fluid">
  <nav class="container-fluid">
    <ul class="d-flex justify-content-between row container-fluid align-items-center">
      <li class="col d-flex justify-content-start align-items-center"><img src={logo} alt="logo" class="logo" /></li>
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="col d-flex justify-content-center title">
        <a href={'/' + lang + '/welcome'} style="font-size: xx-large;" class="title">CAMI</a>
      </li>
      <li class="col d-flex justify-content-center flag">
        {#if lang === 'en'}
          <a href={'/fr' + params}><img src={frflag} alt="french flag" class="flag-icon" /></a>
        {/if}
        {#if lang === 'fr'}
          <a href={'/en' + params}><img src={ukflag} alt="english flag" class="flag-icon" /></a>
        {/if}
      </li>
      <li class="col d-flex justify-content-end visualizer"><button class="visu" on:click={onClick}>{languages[language]?.download}</button></li>
    </ul>
  </nav>
  <div class="separator"></div>
</header>

<style scoped>
  header {
    position: fixed;
    z-index: 10000;
    display: flex;
    background-color: #111112;
    width: 100vw;
    height: 12vh;
    padding: 2vh 0px;
    justify-content: space-evenly;
    align-items: center;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #6956e5;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  li[aria-current='page']::before {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: var(--size) solid transparent; */
    /* border-top: var(--size) solid var(--color-theme-1); */
  }

  nav a {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    color: #6956e5;
    text-align: center;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  a:hover {
    color: #1956e5;
  }

  button:hover {
    background: #1956e5;
    border-color: #1956e5;
  }

  .separator {
    width: 100%;
    margin-top: 1vh;
    height: 1px;
    background-color: whitesmoke;
    overflow: hidden;
  }

  .title {
    flex-grow: 8;
    font-size: 5rem;
    font-weight: 700;
  }

  .logo {
    width: 4vw;
    min-width: 2vw;
    min-height: 7vh;
    position: relative;
  }

  .visualizer {
    flex-grow: 1;
  }
  .visu {
    border-radius: 25px;
    background: #6956e5;
    display: flex;
    padding: 5px 20px;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    gap: 10px;
    border-color: #6956e5;
  }
  .flag {
    max-width: 3vw;
  }
  .flag-icon {
    height: 3vh;
  }
</style>
