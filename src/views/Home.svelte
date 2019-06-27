<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import { route } from "../stores/route";
  export let router = {};
  route.set(router.route.path);

  let mounted = false;
  onMount(() => {
    setTimeout(() => {
      mounted = true;
    }, 1000);
  });
</script>

<div class="title-container">
  {#if mounted}
  <h1
    class="title top"
    class:mounted
    in:fly="{{ y: -10, duration: 750, delay: 1000 }}"
  >
    Adam
  </h1>
  {/if}
  <hr class="hrow" class:mounted />
  {#if mounted}
  <h1
    class="title bottom"
    class:mounted
    in:fly="{{ y: 10, duration: 750, delay: 1000 }}"
  >
    Sherwood
  </h1>
  {/if}
</div>

<style>
  .title {
    font-family: futura-pt, Helvetica, Arial, sans-serif;
    letter-spacing: 0.6em;
    text-transform: uppercase;
    font-weight: lighter;
    margin: 0;
    line-height: 0;
  }

  .title-container {
    position: absolute;
    top: 50vh;
    left: 0;
    right: 0;
  }

  .hrow {
    margin-top: 1em;
    margin-bottom: 1.7em;
    border-top: solid 3em rgba(255, 255, 255, 1);
    transform: scaleX(0);
    transition: transform 1000ms ease-out, border-color 1000ms ease-out;
    transform-origin: left;
    border-right: solid 7em transparent;
  }

  .hrow.mounted {
    transform: scaleX(1);
    border-top: solid 3em rgba(255, 255, 255, 0.1);
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
