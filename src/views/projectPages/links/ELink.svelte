<script>
  export let href = "/";
  export let title;
</script>

<a {href} target="_blank" rel="noopener noreferrer" {title}>
  <slot></slot>
</a>
