<script>
    import {onMount} from 'svelte';

    let count = 0;

    let name = 'Svelte App'

    function rename() {
        name = 'Svelte@next App';
    }

    onMount(() => {
        const interval = setInterval(() => count++, 1000);
        return () => {
            clearInterval(interval);
        };
    });
</script>


<div>
    <header>
        <h1>{name}</h1>
        <button on:click={rename}>Test</button>
        <p>Page has been open for <code>{count}</code> seconds.</p>
    </header>
</div>

<style>
    code {
        font-weight: bold;
        font-size: 2rem;
    }
</style>
