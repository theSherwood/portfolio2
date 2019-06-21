<script>
  import {onMount} from 'svelte';
  import {fly, fade} from 'svelte/transition';
  import {Link} from 'svero';
  import {route} from '../stores/route';

  let mounted = false;

  onMount(() => {
    mounted = true;
  })

  function randDuration() {
    return (Math.random() * 900) + 400;
  }

</script>

<nav>
  {#if mounted}
    <div transition:fly="{{y: -50, duration: randDuration() }}"><Link href="/"><button class:active="{$route === '*'}">Home</button></Link></div>
    <div transition:fly="{{y: -50, duration: randDuration() }}"><Link href="/bio"><button class:active="{$route === '/bio'}">Bio</button></Link></div>
    <div transition:fly="{{y: -50, duration: randDuration() }}"><Link href="/projects"><button class:active="{$route === '/projects'}">Projects</button></Link></div>
    <div transition:fly="{{y: -50, duration: randDuration() }}"><Link href="/cv"><button class:active="{$route === '/cv'}">CV</button></Link></div>
  {/if}
</nav>

<style>
  nav {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    --active-color:  black; /* #ff3e00; */
  }

  nav :global(a):hover {
    text-decoration: none;
  }

  div {
    flex: 1 1 auto;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    position: relative;
    outline: none;
    border: none;
    padding: 5px;
    background: none;
    border-radius: 0px;
    color: #555555;
    transition: box-shadow 500ms ease-in-out, color 500ms ease-in-out;
    box-shadow: inset -30px 0px -30px var(--active-color);
  }

  .active, button:hover {
    box-shadow: inset 0 -30px 90px 0px var(--active-color);
    color: white;
  }

  @media only screen and (max-width: 600px) {
    nav {
      padding: 10px 0px;
      font-size: 80%;
      grid-gap: 1rem;
    }

    .active, button:hover {
      box-shadow: inset 0 -30px 80px 0px var(--active-color);
    }
  }

  @media only screen and (max-width: 500px) {
    nav {
      padding: 0px;
      padding-bottom: 10px;
      font-size: 60%;
      grid-gap: 1px;
    }
  }
</style>
