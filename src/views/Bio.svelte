<script>
  import { Router, Route } from "svero";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import Future from './bioSections/Future.svx'
  import Past from './bioSections/Past.svx'
  import Present from './bioSections/Present.svx'

  import ContactLinks from '../components/ContactLinks.svelte'

  import { pageTransition } from "../stores/pageTransition";
  import { route } from "../stores/route";
  export let router = {};
  route.set(router.route.path);

  let render = false;
  onMount(() => {
    render = true;
  });
  $: if ($pageTransition) {
    render = false;
  }
</script>

{#if render}
<main out:fly="{{ y: 80, duration: 200}}">
  <section in:fly="{{ x: -80, duration: 400, delay: 0 }}">
    <ContactLinks />
  </section>
  <section in:fly="{{ x: -80, duration: 400, delay: 0 }}">
    <Present />
  </section>
  <section in:fly="{{ x: -80, duration: 400, delay: 200 }}">
    <Past />
  </section>
  <section in:fly="{{ x: -80, duration: 400, delay: 400 }}">
    <Future />
  </section>
</main>
{/if}

<style>
  main {
    max-width: 800px;
    margin: auto;
    position: relative;
  }

  section {
    position: relative;
    margin-bottom: 1em;
    padding: 1em;
  }

  section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(0, 0, 0);
    opacity: 0.7;
    z-index: -1;
  }
</style>
