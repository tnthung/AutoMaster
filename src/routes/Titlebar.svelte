<script lang="ts">
  import { appWindow } from "@tauri-apps/api/window";
</script>


<div class="flex h-20px">
  <span data-tauri-drag-region class="block lh-20px select-none text-13px font-900 ml-10px flex-1">AutoMaster</span>
  <button on:click={appWindow.minimize} class="reset"><i class="fa-solid fa-minus"/></button>
  <button on:click={appWindow.close   } class="reset"><i class="fa-solid fa-xmark"/></button>
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
