<script>
  import {Router, Route} from 'svero'
  import {onMount} from 'svelte'
  import {fade, fly} from 'svelte/transition'

  import Navbar from './layout/Navbar.svelte';
  import Home from './views/Home.svelte';
  import CV from './views/CV.svelte'
  import Bio from './views/Bio.svelte'
  import Projects from './views/Projects.svelte'
  import ProjectWrapper from './views/ProjectWrapper.svelte'

  let path = '/images/'

  let urls = "test3.jpg milkyway3.jpg test1.jpg test2.jpg milkyway.jpg".split(' ');

  let backdrops = [urls[0], urls[1], urls[2]];

  let count = -1;
  onMount(() => {
    setTimeout(() => {
      count++;
    }, 50)
    setInterval(() => {
      toggleAnimate()
    }, 7000)
  })

  function toggleAnimate() {
    count++
    const nextBackdrop = (count + 1) % 3;
    const nextUrl = (count + 1) % urls.length;
    backdrops[nextBackdrop] = urls[nextUrl];
    // Force reactivity
    backdrops = backdrops;
  }

</script>

{#each backdrops as backdrop, i}
<div class="backdrop" class:show={count%3 === i} style="background-image: url({path+backdrop})"></div>
{/each}

<Navbar />
<div class="views-container">
  <Router>
    <Route path="*" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/bio" component={Bio} />
    <Route path="/cv" component={CV} />

    <!-- Project Routes -->
    <Route path="/projects/:project" component={ProjectWrapper} />
  </Router>
</div>

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

  .views-container {
    padding: 0;
  }

  .show {
    opacity: 1;
  }
</style>

