<script lang="ts">
  import "virtual:uno.css";
  import "../assets/fontawesome/scss/solid.scss";
  import "../assets/fontawesome/scss/fontawesome.scss";

  import dark from "../store/darkmode";

  import Titlebar from "./Titlebar.svelte";
</script>


<div class="page flex flex-col fixed inset-0 bdr-5 of-hidden bgc-0000" class:dark={$dark}>
  <Titlebar/>
  <main class="flex-1">
    <slot/>
  </main>
</div>


<style lang="scss" global>
  div.page {
    --txt: #031107;
    --bgc: #d9f7e2;
    --pri: #1d913f;
    --sec: #f6fdf9;
    --acc: #187b36;

    &.dark {
      --txt: #f6f9f5;
      --bgc: #000000;
      --sec: #0a100a;
    }

    font-family: Arial, Helvetica, sans-serif;

    color: var(--txt);

    main {
      background-color: var(--bgc);
    }
  }
</style>
