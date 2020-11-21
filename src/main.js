
// vue app

import {createApp} from 'vue';

import VueApp from './vue/App.vue';
createApp(VueApp).mount('#vue');

// svelte app

import SvelteApp from './svelte/App.svelte';

new SvelteApp({
    target: document.getElementById("svelte"),
    props: {
        // Props
    }
});

// react app

import './react/index'
