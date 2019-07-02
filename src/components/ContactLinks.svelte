<script>
  import EmailIcon from './EmailIcon.svelte';
  import TwitterIcon from './TwitterIcon.svelte';
  import GithubIcon from './GithubIcon.svelte';
  import CodePenIcon from './CodePenIcon.svelte';

  // Email obfuscator script 2.1 by Tim Williams, University of Arizona
  // Random encryption key feature coded by Andrew Moulden
  // This code is freeware provided these four comment lines remain intact
  // A wizard to generate this code is at http://www.jottings.com/obfuscator/
  let coded = "xlxB.E1C.w1CHZttl@TBxFk.ftB"
  let key = "oWC9ID6T43UJZkBpfGOhsd8QxbNtL7in2rSjqeMyvXgVYR1wlmzcA5EPuFKaH0"
  let shift=coded.length
  let link=""
  for (let i=0; i<coded.length; i++) {
    let ltr;
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
</script>

<a href="{'mailto:'+link}'"  title="Email Address">
  <EmailIcon size="1.5em"/>
  <span>{link}</span>
</a>
<a href="https://github.com/theSherwood" target="_blank" rel="noopener noreferrer"  title="GitHub">
  <GithubIcon size="1.5em"/>
  <span>@theSherwood</span>
</a>
<a href="https://codepen.io/theSherwood/" target="_blank" rel="noopener noreferrer" title="CodePen">
  <CodePenIcon size="1.5em"/>
  <span>@thesherwood</span>
</a>
<a href="https://twitter.com/adamthesherwood" target="_blank" rel="noopener noreferrer" title="Twitter">
  <TwitterIcon size="1.5em"/>
  <span>@adamthesherwood</span>
</a>


<style>
  a {
    display: block;
    width: max-content;
    margin: .4em 0px;
  }

  :global(svg) {
    vertical-align: bottom;
  }

  span {
    margin-left: .5em;
  }

</style>
