<script>
  import {onMount} from 'svelte';
  import {fly, fade} from 'svelte/transition';
  import {Link} from 'svero';
  import {route} from '../stores/route';

  let mounted = false;

  onMount(() => {
    mounted = true;
    console.log(mounted);
  })

  function randDuration() {
    return (Math.random() * 800) + 400;
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
    padding: 20px;
    display: flex;
    justify-content: space-around;
    --active-color: #ff3e00; 
  }

  nav :global(a):hover {
    text-decoration: none;
  }

  button {
    box-sizing: border-box;
    margin: auto;
    position: relative;
    outline: none;
    border: none;
    padding: 5px;
    background: none;
    border-radius: 0px;
    transition: box-shadow 200ms ease-in;
    box-shadow: inset -15px 0px -15px var(--active-color);
  }

  button:hover {
    box-shadow: inset 0 -15px 40px -15px var(--active-color);
  }

  .active {
    box-shadow: inset 0 -15px 40px -15px var(--active-color);
  }
</style>
