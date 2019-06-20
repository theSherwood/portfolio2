<script>
  import ProjectCard from "../components/ProjectCard.svelte"
  import projects from "../data/projects"
  import { route } from "../stores/route";
  export let router = {};
  route.set(router.route.path);
</script>

<div class="grid">
  {#each projects as project, i}
    <ProjectCard {project} i={i}/>
  {/each}
</div>

<style>
  .grid {
    width: 90%;
    max-width: 800px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
  }

  @media only screen and (max-width: 400px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

</style>
