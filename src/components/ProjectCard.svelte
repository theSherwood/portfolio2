<script>
  import GlobeIcon from "./GlobeIcon.svelte";
  import GithubIcon from "./GithubIcon.svelte";

  export let project;

  const {title, description, image, website, github, moreInfo} = project;
</script>

<div class="container">
  <h3>{title}</h3>
  <p>{description}</p>
  <section class="row">
    <a href={website} target="_blank" rel="noopener noreferrer" class="six columns">
      <button>
        <span>
          <span>Website</span>
          <GlobeIcon />
        </span>
      </button>
    </a>
    <a href={github} target="_blank" rel="noopener noreferrer" class="six columns">
      <button>
        <span>
          <span>Source</span>
          <GithubIcon />
        </span>
      </button>
    </a>
  </section>
</div>

<style>
  div {
    padding: 20px;
    border: solid 1px rgba(85, 85, 85, 0.5);
    flex: 0 0 300px;
    margin: 20px;
  }

  button {
    width: 100%;
  }
</style>
