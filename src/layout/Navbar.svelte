<script>
  import {Link} from 'svero'
  import {route} from '../stores/route'


</script>

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
    border-bottom: 3px solid transparent;
  }

  button:hover {
    border-bottom: 3px solid var(--active-color);
  }

  .active {
    border-bottom: 3px solid var(--active-color);
  }
</style>

<nav>
  <Link href="/"><button class:active="{$route === '*'}">Home</button></Link>
  <Link href="/bio"><button class:active="{$route === '/bio'}">Bio</button></Link>
  <Link href="/projects"><button class:active="{$route === '/projects'}">Projects</button></Link>
  <Link href="/cv"><button class:active="{$route === '/cv'}">CV</button></Link>
</nav>
