<script>
  import { Router, Route } from "svero";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  import ProjectCard from "../components/ProjectCard.svelte";
  import projects from "../data/projects";
  import { route } from "../stores/route";

  import Regexxp from "./projectPages/Regexxp.svx";
  import Bibliostack from "./projectPages/Bibliostack.svx";
  import Mentat from "./projectPages/Mentat.svx";
  import Reconjs from "./projectPages/Reconjs.svx";
  import ReconjsSite from "./projectPages/ReconjsSite.svx";
  import Portfolio from "./projectPages/Portfolio.svx";

  export let router = {};

  const routes = {
    regexxp: Regexxp,
    bibliostack: Bibliostack,
    mentat: Mentat,
    reconjs: Reconjs,
    "reconjs-site": ReconjsSite,
    portfolio: Portfolio
  };

  let component = routes[router.params.project];
</script>

<main>
  <svelte:component this="{component}" />
</main>

<style>
  main {
    max-width: 800px;
    margin: auto;
    padding: 8px;
  }
</style>
