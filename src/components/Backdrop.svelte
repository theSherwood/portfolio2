<script>
  import {onMount} from 'svelte'

  let path = '/images/'

  let urls = "nebula1.jpg milkyway.jpg nebula3.jpg stars1.jpg crab.jpg stars3.jpg nebula2.jpg stars4.jpg jupiter.jpg stars2.jpg sun.jpg stars5.jpg eastcoast.jpg".split(' ');

  let count = -1;
  onMount(() => {
    setTimeout(() => {
      count += 1;
    }, 50)
    setInterval(() => {
      advanceSlide()
    }, 30000)
  })

  function advanceSlide() {
    count += 1;
  }

  function retreatSlide() {
    count = count - 1 < 0 ? urls.length - 1 - count : count - 1;
  }

  function handleKeydown(e) {
    if (e.key === "ArrowRight" ) {
      advanceSlide();
    } else if (e.key === "ArrowLeft" ) {
      retreatSlide();
    }
  }

</script>

<!-- Backdrop Slideshow -->
{#each urls as url, i}
<div class="backdrop" class:show={count%urls.length === i} style="background-image: url({path+url})"></div>
{/each}

<svelte:window on:keydown={handleKeydown}/>

<style>
  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: 50% 40%;
    z-index: -10;
    opacity: 0;
    transition: opacity 3000ms ease-in;
  }

  .backdrop::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgb(0,0,0);
    background: radial-gradient(ellipse at 80% 30%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 33%, rgba(0,0,0,0.76) 57%, rgba(0,0,0,1) 100%);
  }

  .show {
    opacity: 1;
  }
</style>

