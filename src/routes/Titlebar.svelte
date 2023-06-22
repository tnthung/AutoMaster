<script lang="ts">
  import { open               } from "./Setting.svelte";
  import { appWindow          } from "@tauri-apps/api/window";
  import { onDestroy, onMount } from "svelte";

  import version from "../store/version";


  let interval: any;
  let toggleIconClass = "fa-maximize";

  onMount(() => {
    interval = setInterval(async () => {
      toggleIconClass = (await appWindow.isMaximized())
        ? "fa-minimize"
        : "fa-maximize";
    }, 100);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  const toggleMaximize = () => {
    appWindow.toggleMaximize();
  };

</script>


<div class="flex h-20px">
  <span data-tauri-drag-region class="block lh-20px text-13px font-900 ml-10px flex-1">AutoMaster {$version}</span>
  <button on:click={open              } class="reset"><i class="fas fa-gear"          /></button>
  <div class="w-20px"/>
  <button on:click={appWindow.minimize} class="reset"><i class="fas fa-minus"         /></button>
  <button on:click={toggleMaximize    } class="reset"><i class="fas {toggleIconClass}"/></button>
  <button on:click={appWindow.close   } class="reset"><i class="fas fa-xmark"         /></button>
</div>


<style lang="scss">
  div {
    color: #0009;
    background-color: var(--acc);

    button {
      height: 100%;
      display: grid;
      aspect-ratio: 1.2/1;
      place-content: center;

      &:hover {
        background-color: var(--pri);
      }
    }
  }
</style>
