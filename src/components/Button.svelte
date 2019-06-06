<button>
  <span><slot></slot></span>
</button>

<style>
  button {
    box-sizing: border-box;
    margin: auto;
    /* background: rgb(193, 172, 120); */
    /* background: rgb(211, 141, 111); */
    position: relative;
    outline: none;
    border: none;
    /* border-radius: 3px; */
    padding: 5px;
    background: none;
  }

  button:hover {
    outline: solid 1px rgb(211, 141, 111);
  }

  /* button:after {
    content: "";
    position: absolute;
    left: 1px;
    top: 1px;
    right: 1px;
    bottom: 1px;
    background: white;
    border-radius: 2px;
    transition: transform 175ms ease-in-out;
    transform-origin: right;
  }

  button:hover:after {
    transform: scale(0, 1);
  } */

  span {
    position: relative;
    color: rgb(140, 112, 46);
    z-index: 10;
    transition: color 175ms ease-in;
    font-family: monospace;
    font-weight: 400;
  }

  button:hover span {
    /* color: white; */
  }
</style>
