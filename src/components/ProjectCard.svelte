<script>
  import {onMount} from 'svelte';
  import {fly} from 'svelte/transition';
  import {Link} from 'svero';
  import { pageTransition } from '../stores/pageTransition';
  import { pageTransitionHelper } from '../helpers/pageTransitionHelper';
  
  import DelayLink from './DelayLink.svelte'

  export let i;

  export let enter = 0;

  onMount(() => {
    setTimeout(() => {
      enter = 300;
    }, (i + 1) * 120)
  })

  $: if ($pageTransition) {
    enter = 0;
  }

  export let project;

  const { title, image, links, info, blurb } = project;
</script>

{#if enter}
<div in:fly="{{ y: 40, duration: enter }}" out:fly="{{ y: 80, duration: 200 }}" class="card-container">
  <div class="title-container">
    <h3>{title}</h3>
    <p>{blurb}</p>
  </div>
  <section>
    {#each Object.entries(links) as [key, value], i}
    <a href={value} target="_blank" rel="noopener noreferrer">
      <button>
        <span>
          <span class="svg-wrapper">
            <span>{key}</span>
          </span>
        </span>
      </button>
    </a>  
    {/each}
    <DelayLink href={"/projects/" + info} delay={200} callback={pageTransitionHelper}>
      <button>
        <span>
          <span class="svg-wrapper">
            <span>Learn More</span>
          </span>
        </span>
      </button>
    </DelayLink>
  </section>
</div>
{/if}

<style>
  .card-container {
    padding: 20px;
    height: 300px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    --active-color:  black;
    --contrast-color: white;
    transition: color 500ms ease-in-out;
  }

  .card-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: .5;
    transition: opacity 500ms ease-in;
    background: rgb(0,0,0);
    background: radial-gradient(ellipse at 80% 30%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 33%, rgba(0,0,0,0.9) 57%, rgba(0,0,0,1) 100%);
    z-index: -1;
  }

  .card-container:hover {
    color: var(--contrast-color);  
  }

  .card-container:hover::before {
    opacity: 1;
  }

  .title-container {
    overflow: hidden;
    position: relative;
  }

  .title-container::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2em;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%)
  }

  a {
    width: 100%;
  }

  a:hover, div :global(a):hover {
    text-decoration: none;
  }

  button {
    width: 100%;
    line-height: 0px;
  }

  .svg-wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .svg-wrapper :global(svg) {
    align-self: center;
    margin: 0em .5em;
  }

  button {
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    position: relative;
    outline: none;
    border: none;
    padding: 5px;
    background: transparent;
    border-radius: 0px;
    color: var(--contrast-color);
    transition: border-color 1000ms ease-in;
    border: solid 1px transparent;
  }

  button:hover {
    border: solid 1px var(--contrast-color);
  }
</style>
