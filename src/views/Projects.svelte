<script>
  import Project from '../components/Project.svelte'
  import projects from '../data/projects'
  
</script>

<h3>Projects</h3>
<p>Hello hello hello</p>
<div>
{#each projects as project}
  <Project {project} />
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
