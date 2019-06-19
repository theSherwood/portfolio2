<script>
  import {Link} from 'svero'
  import {route} from '../stores/route'

  $: console.log($route)

</script>

<style>
  nav {
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }

  button {
    box-sizing: border-box;
    margin: auto;
    position: relative;
    outline: none;
    border: none;
    padding: 5px;
    background: none;
  }

  button:hover {
    outline: solid 1px #555;
  }

  .active {
    background: red;
  }
</style>

<nav>
  <Link href="/"><button class:active="{$route === '*'}">Home</button></Link>
  <Link href="/bio"><button class:active="{$route === '/bio'}">Bio</button></Link>
  <Link href="/projects"><button class:active="{$route === '/projects'}">Projects</button></Link>
  <Link href="/cv"><button class:active="{$route === '/cv'}">CV</button></Link>
</nav>
