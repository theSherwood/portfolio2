<script>
  import { route } from "../stores/route";
  export let router = {};
  route.set(router.route.path);
</script>

<div class="title-container">
  <h1 class="title">Adam</h1>
  <h1 class="title">Sherwood</h1>
</div>

<style>
  .title {
    font-family: futura-pt, Helvetica, Arial, sans-serif;
    letter-spacing: 0.6em;
    text-transform: uppercase;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
    margin: 0;
    line-height: 0.8em;
  }

  .title-container {
    position: absolute;
    top: 50vh;
  }
</style>
