<script lang="ts">
  import "virtual:uno.css";
  import "../assets/fontawesome/scss/solid.scss";
  import "../assets/fontawesome/scss/fontawesome.scss";

  // transition
  import { fly } from "svelte/transition";

  // store
  import dark from "../store/darkmode";

  // components
  import Setting  from "./Setting.svelte";
  import Titlebar from "./Titlebar.svelte";


  export let data: { url: URL };
</script>


<div id="app" class:dark={$dark}>
  <Titlebar/>
  <Setting/>
  <span id="page">
    {#key data.url.pathname}
    <main transition:fly><slot/></main>
    {/key}
  </span>
</div>


<style lang="scss" global>
  #app {
    --txt: #031107;
    --bgc: #d9f7e2;
    --pri: #1d913f;
    --sec: #f6fdf9;
    --acc: #187b36;
    --neg: #d14141;

    &.dark {
      --txt: #f6f9f5;
      --bgc: #000c04;
      --sec: #0a100a;
    }

    inset   : 0;
    position: fixed;

    display  : flex;
    flex-flow: column nowrap;

    color        : var(--txt);
    overflow     : hidden;
    background   : var(--bgc);
    font-family  : Arial, Helvetica, sans-serif;
    border-radius: 5px;

    user-select: none;
  }


  #page {
    position : relative;
    flex-grow: 1;

    main {
      inset           : 0;
      padding         : 10px;
      position        : absolute;
      background-color: var(--bgc);
    }
  }


  [debug] {
    outline: 1px solid red;
  }
</style>
