<script>
  export let name;
  import Navbar from './layout/Navbar.svelte'
  import Home from './views/Home.svelte'
  import CV from './views/CV.svelte'
  import Bio from './views/Bio.svelte'
  import Projects from './views/Projects.svelte'
  import {Router, Route} from 'svero'
</script>

<Navbar />
<Router>
  <Route path="*" component={Home} />
  <Route path="/projects" component={Projects} />
  <Route path="/bio" component={Bio} />
  <Route path="/cv" component={CV} />
</Router>

