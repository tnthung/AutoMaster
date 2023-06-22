<script context="module" lang="ts">
  import { writable } from "svelte/store";

  import { scale, fade } from "svelte/transition";

  import Switch from "$lib/Switch.svelte";


  let opened = writable(false);

  function  openSetting() { opened.set(true ); };
  function closeSetting() { opened.set(false); };

  export { openSetting as open };
</script>


{#if $opened}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="background" transition:fade={{duration: 100}}
    on:click|self={closeSetting}>
    <span class="panel" transition:scale={{duration: 100}}>
      <h1 class="p-unset m-unset text-center mb-15px">Setting</h1>
    </span>
  </div>
{/if}


<style lang="scss">
  div.background {
    inset    : 0;
    z-index  : 1;
    position : fixed;
    isolation: isolate;

    display      : grid;
    place-content: center;

    backdrop-filter: blur(10px);
  }


  span.panel {
    width     : 500px;
    padding   : 25px;
    box-sizing: border-box;

    display  : flex;
    flex-flow: column;

    border-radius   : 15px;
    background-color: var(--bgc);

    box-shadow: 0 0 10px #0005;
  }
</style>
