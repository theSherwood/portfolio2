<script>
  import {onMount} from 'svelte';
  import {fly} from 'svelte/transition';
  import {Link} from 'svero';
  import GlobeIcon from "./GlobeIcon.svelte";
  import GithubIcon from "./GithubIcon.svelte";

  export let i;

  export let enter = 0;

  onMount(() => {
    setTimeout(() => {
      enter = 300;
    }, (i + 1) * 120)
  })

  export let project;

  const { title, description, image, links, info } = project;
</script>

{#if enter}
<div in:fly="{{ y: 40, duration: enter }}" out:fly="{{ y: 800, duration: enter }}" class="card-container">
  <di>
    <h3>{title}</h3>
    <p>{description}</p>
  </di>
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
    <Link href={"/projects" + info}>
      <button>
        <span>
          <span class="svg-wrapper">
            <span>Process</span>
          </span>
        </span>
      </button>
    </Link>
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

  a {
    width: 100%;
  }

  a:hover, :global(a):hover {
    text-decoration: none;
  }

  button {
    width: 100%;
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
    transition: box-shadow 500ms ease-in-out, color 500ms ease-in-out;
    box-shadow: inset -30px 0px -30px var(--contrast-color);
  }

  button:hover {
    box-shadow: inset 0 -30px 100px 0px var(--contrast-color);
    color: var(--active-color);
  }
</style>
