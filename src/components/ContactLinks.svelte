<script>
  import EmailIcon from './EmailIcon.svelte';
  import ResumeIcon from './ResumeIcon.svelte';
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

<div>
<a href="/AdamSherwoodResume.pdf" target="_blank" rel="noopener noreferrer" title="Résumé">
  <ResumeIcon size="1.5em"/>
  <span>Résumé</span>
</a>
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
  <span>@theSherwood</span>
</a>
<a href="https://twitter.com/adamthesherwood" target="_blank" rel="noopener noreferrer" title="Twitter">
  <TwitterIcon size="1.5em"/>
  <span>@adamthesherwood</span>
</a>
</div>

<style>
  .contact {
    font-size: 1.1em;
  }

  a {
    display: block;
    width: max-content;
    margin: 1em 0px;
  }

  a:hover {
    text-decoration: none;
  }

  a:hover > span {
    text-decoration: underline;
  }

  div :global(svg) {
    vertical-align: bottom;
  }

  span {
    margin-left: .5em;
  }

  @media only screen and (max-width: 500px) {
    .contact {
      font-size: 1em;
    }
  }
</style>
