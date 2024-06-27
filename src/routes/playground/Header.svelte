<script>
    import { page } from '$app/stores';
</script>

<header class="d-flex flex-column container-fluid py-2">
    <nav class="container-fluid">
        <ul class="d-flex justify-content-between row container-fluid">
            <li class="col d-flex justify-content-start align-items-center">
                Logo
            </li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="col d-flex title justify-content-center">
                <a href="/welcome" style="font-size: xx-large;" class="title">
                    CAMI
                </a>
            </li>
            <li></li>
        </ul>
    </nav>
    <div class="separator my-2"></div>
</header>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
		background-color: #111112;
	}

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #6956E5;
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
        position: relative;
        height: 100%;
        width: 500px;
    }

    li[aria-current='page']::before {
        --size: 6px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--color-theme-1);
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--color-theme-1);
    }

    .separator {
        width: 100%;
        height: 1px;
        background-color: whitesmoke;
        overflow: hidden;
    }

    .title {
        font-size: 5rem;
        font-weight: 700;
    }

    .visualize {
        border-radius: 25px;
        width: 50%;
        border: none;
        color: #000;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
</style>
