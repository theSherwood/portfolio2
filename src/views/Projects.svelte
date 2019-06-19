<script>
  import ProjectCard from '../components/ProjectCard.svelte'
  import projects from '../data/projects'
  import { route } from "../stores/route";
  export let router = {};
  route.set(router.route.path);
</script>

<div>
{#each projects as project}
  <ProjectCard {project} />
{/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
