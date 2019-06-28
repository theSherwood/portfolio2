<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  import { route } from "../stores/route";
  import { pageTransition } from "../stores/pageTransition";

  export let router = {};
  route.set(router.route.path);

  let mounted = false;

  onMount(() => {
    setTimeout(() => {
      mounted = true;
    }, 1000);
  });

  $: if ($pageTransition) {
    mounted = false;
  }
</script>

<div class="title-container">
  {#if mounted}
  <h1
    class="title"
    in:fly="{{ y: -10, duration: 750, delay: 1000 }}"
    out:fly="{{ x: -80, duration: 200 }}"
  >
    Adam
  </h1>
  {/if}
  <hr class="hrow" class:mounted out:fly="{{ x: -80, duration: 200 }}" />
  {#if mounted}
  <h1
    class="title"
    in:fly="{{ y: 10, duration: 750, delay: 1000 }}"
    out:fly="{{ x: -80, duration: 200 }}"
  >
    Sherwood
  </h1>
  {/if}
</div>

<style>
  .title {
    letter-spacing: 0.6em;
    font-family: "Helvetica Neue", sans-serif;
    text-transform: uppercase;
    font-weight: lighter;
    margin: 0;
    margin-left: 1em;
    color: white;
  }

  .title-container {
    position: absolute;
    top: 50vh;
    left: 0;
    right: 0;
  }

  .hrow {
    border-top: solid 4em rgba(255, 255, 255, 1);
    transform: scale(0);
    transform-origin: left;
    margin-top: -2em;
    margin-bottom: -2em;
  }

  .hrow.mounted {
    transform: scale(1);
    transition: transform 1000ms ease-out, border-color 1000ms ease-out;
    border-top: solid 4em rgba(255, 255, 255, 0.1);
  }

  @media only screen and (max-width: 650px) {
    .title-container {
      font-size: 0.9em;
    }

    .title {
      font-size: 3em;
    }
  }

  @media only screen and (max-width: 550px) {
    .title-container {
      font-size: 0.7em;
    }

    .title {
      font-size: 3em;
      margin-left: 0.5em;
    }
  }

  @media only screen and (max-width: 400px) {
    .title-container {
      font-size: 0.5em;
    }

    .title {
      font-size: 3em;
    }
  }
</style>
