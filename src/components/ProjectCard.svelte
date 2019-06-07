<script>
  import GlobeIcon from "./GlobeIcon.svelte";
  import GithubIcon from "./GithubIcon.svelte";

  export let project;
</script>

<div>
<h3>{project.title}</h3>
<p>{project.description}</p>
<GlobeIcon />
<GithubIcon />
</div>

<style>
  div {
    padding: 20px;
    border: solid 1px rgba(85, 85, 85, 0.5);
    flex: 0 0 300px;
  }
</style>
