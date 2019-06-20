<script>
  import {onMount} from 'svelte';
  import {fly} from 'svelte/transition';
  import {Link} from 'svero';
  import GlobeIcon from "./GlobeIcon.svelte";
  import GithubIcon from "./GithubIcon.svelte";

  export let i;

  let enter = 0;

  onMount(() => {
    setTimeout(() => {
      enter = 300;
    }, (i + 1) * 120)
  })

  export let project;

  const { title, description, image, links, info } = project;
</script>

{#if enter}
<div in:fly="{{ y: 20, duration: enter }}">
  <h3>{title}</h3>
  <p>{description}</p>
  <section>
    {#each Object.entries(links) as [key, value], i}
    <a href={value} target="_blank" rel="noopener noreferrer">
      <button>
        <span>
          <span class="svg-wrapper">
            <span>{key}</span>
          {#if key === 'github'}
            <GithubIcon />
          {:else if key === 'info'}
          {:else}
            <GlobeIcon />
          {/if}
          </span>
        </span>
      </button>
    </a>  
    {/each}
    <Link href={info}>
      <button>
        <span>
          <span class="svg-wrapper">
            <span>Info</span>
          </span>
        </span>
      </button>
    </Link>
  </section>
</div>
{/if}

<style>
  div {
    padding: 20px;
    border: solid 1px rgba(85, 85, 85, 0.5);
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
</style>
