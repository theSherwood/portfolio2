<script>
  import { onMount } from "svelte";
  import { navigateTo } from "svero";

  let cssClass = "";
  export let href = "/";
  export let className = "";
  export { cssClass as class };

  export let delay = 0;
  export let callback = () => {};
  export let delayedCallback = () => {};

  onMount(() => {
    className = className || cssClass;
  });

  function handleClick() {
    const cleanup = callback();
    if (delay) {
      setTimeout(() => {
        if (cleanup) cleanup();
        delayedCallback();
        navigateTo(href);
      }, delay);
    } else {
      navigateTo(href);
    }
  }
</script>

<a href="{href}" class="{className}" on:click|preventDefault="{handleClick}">
  <slot></slot>
</a>
