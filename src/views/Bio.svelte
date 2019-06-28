<script>
  import { Router, Route } from "svero";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
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
<main in:fly="{{ y: 80, duration: 400}}" out:fly="{{ y: 80, duration: 200}}">
  <h3>Where I Am</h3>
    <p>
      Husband and father of two girls. I'm a U.S. citizen currently living in the U.K. while finishing up my masters at the Royal College of Art (I'll be done in a couple of weeks; then we'll be moving back to the states).
    </p>
  <h3>How I Got Here</h3>
    <p>My first real encounter with programming was for an artwork. </p>
  <h3>Where I'm Headed</h3>
    <p>
      We'll be moving back to the U.S. in the next few months. The short term goal is to have a good job to move back to.
    </p>
</main>
{/if}

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
