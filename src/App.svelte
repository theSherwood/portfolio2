<script>
  import {Router, Route} from 'svero'

  import Backdrop from './components/Backdrop.svelte';

  import Navbar from './layout/Navbar.svelte';
  import Home from './views/Home.svelte';
  import CV from './views/CV.svelte'
  import Bio from './views/Bio.svelte'
  import Projects from './views/Projects.svelte'
  import ProjectWrapper from './views/ProjectWrapper.svelte'
</script>

<Backdrop />
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
  .views-container {
    padding: 0;
  }
</style>

