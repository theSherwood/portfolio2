<script>
  import GlobeIcon from "./GlobeIcon.svelte";
  import GithubIcon from "./GithubIcon.svelte";

  export let project;

  const { title, description, image, links, moreInfo } = project;
</script>

<div class="container">
  <h3>{title}</h3>
  <p>{description}</p>
  <section class="row">
    {#each Object.entries(links) as [key, value], i}
    <a href={value} target="_blank" rel="noopener noreferrer" class="six columns">
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
  </section>
</div>

<style>
  div {
    padding: 20px;
    border: solid 1px rgba(85, 85, 85, 0.5);
    flex: 0 0 300px;
    margin: 20px;
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
