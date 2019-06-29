<script>
  import { Router, Route } from "svero";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { pageTransition } from "../stores/pageTransition";
  import { pageTransitionHelper } from "../helpers/pageTransitionHelper";

  import Regexxp from "./projectPages/Regexxp.svx";
  import Bibliostack from "./projectPages/Bibliostack.svx";
  import Mentat from "./projectPages/Mentat.svx";
  import Reconjs from "./projectPages/Reconjs.svx";
  import ReconjsSite from "./projectPages/ReconjsSite.svx";
  import Portfolio from "./projectPages/Portfolio.svx";

  export let router = {};
  const param = router.params.project;

  let render = false;
  onMount(() => {
    render = true;
  });
  $: if ($pageTransition) {
    render = false;
  }

  const routes = {
    regexxp: Regexxp,
    bibliostack: Bibliostack,
    mentat: Mentat,
    reconjs: Reconjs,
    "reconjs-site": ReconjsSite,
    portfolio: Portfolio
  };

  let component = routes[param];
</script>

{#if render}
<main in:fly="{{ y: 80, duration: 400}}" out:fly="{{ y: 80, duration: 200}}">
  <svelte:component this="{component}" />
</main>
{/if}

<style>
  main {
    max-width: 800px;
    margin: auto;
    padding: 1em;
    position: relative;
  }

  main::before {
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
