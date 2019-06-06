<script>
  // import Button from "../components/Button.svelte";
  import {Link} from 'svero'
</script>

<style>
  nav {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
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
    outline: solid 1px rgb(159, 135, 124);
  }
</style>

<nav>
  <Link href="/"><button>Home</button></Link>
  <Link href="/bio"><button>Bio</button></Link>
  <Link href="/projects"><button>Projects</button></Link>
  <Link href="/cv"><button>CV</button></Link>
</nav>
