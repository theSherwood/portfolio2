<script>
  import Navbar from './layout/Navbar.svelte';
  import Home from './views/Home.svelte';
  import CV from './views/CV.svelte'
  import Bio from './views/Bio.svelte'
  import Projects from './views/Projects.svelte'
  import {Router, Route} from 'svero'
  import {onMount} from 'svelte'
  import {fade, fly} from 'svelte/transition'

  import Regexxp from './views/projectPages/Regexxp.svx'
  import Bibliostack from './views/projectPages/Bibliostack.svx'
  import Mentat from './views/projectPages/Mentat.svx'
  import Reconjs from './views/projectPages/Reconjs.svx'
  import ReconjsSite from './views/projectPages/ReconjsSite.svx'
  import Portfolio from './views/projectPages/Portfolio.svx'

  let showBackdrop = false;
  let animate = false;
  onMount(() => {
    showBackdrop = true;
    setTimeout(() => {
      animate = true;
    }, 50);
  })

</script>

{#if showBackdrop}
<div in:fade="{{duration: 2000}}" class="backdrop" class:animate></div>
{/if}
<Navbar />
<div class="views-container">
  <Router>
    <Route path="*" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/bio" component={Bio} />
    <Route path="/cv" component={CV} />

    <!-- Project Routes -->
    <Route path="/regexxp" component={Regexxp} />
    <Route path="/bibliostack" component={Bibliostack} />
    <Route path="/mentat" component={Mentat} />
    <Route path="/reconjs" component={Reconjs} />
    <Route path="/reconjs-site" component={ReconjsSite} />
    <Route path="/portfolio" component={Portfolio} />
  </Router>
</div>

<style>
  .backdrop {
    filter: grayscale(1) contrast(110%) brightness(120%);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("/images/milkyway2.jpg" );
    background-size: cover;
    background-position: 50% 40%;
    z-index: -10;
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

  /* .animate {
    transform: translateY(50%);
  } */
</style>

