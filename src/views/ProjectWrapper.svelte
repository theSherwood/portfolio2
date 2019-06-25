<script>
  import { Router, Route } from "svero";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  import Regexxp from "./projectPages/Regexxp.svx";
  import Bibliostack from "./projectPages/Bibliostack.svx";
  import Mentat from "./projectPages/Mentat.svx";
  import Reconjs from "./projectPages/Reconjs.svx";
  import ReconjsSite from "./projectPages/ReconjsSite.svx";
  import Portfolio from "./projectPages/Portfolio.svx";

  export let router = {};
  const param = router.params.project;

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

<main>
  <svelte:component this="{component}" />
</main>

<style>
  main {
    max-width: 800px;
    margin: auto;
    padding: 8px;
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
