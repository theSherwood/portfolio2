<script>
  export let name;
  import Navbar from './layout/Navbar.svelte'
  import Home from './views/Home.svelte'
  import CV from './views/CV.svelte'
  import Bio from './views/Bio.svelte'
  import Projects from './views/Projects.svelte'
  import {Router, Route} from 'svero'

  import Regexxp from './views/projectPages/Regexxp.svx'
  import Bibliostack from './views/projectPages/Bibliostack.svx'
  import Mentat from './views/projectPages/Mentat.svx'
  import Reconjs from './views/projectPages/Reconjs.svx'
  import ReconjsSite from './views/projectPages/ReconjsSite.svx'
  import Portfolio from './views/projectPages/Portfolio.svx'
</script>

<Navbar />
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

