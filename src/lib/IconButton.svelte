<script lang="ts">
  export let icon  = "fa-bars";
  export let color = "#CCC";
  export let title = "";
</script>


<button class="reset" {title} on:click
  on:mouseenter={e => e.currentTarget.style.setProperty("background-color", color)}
  on:mouseleave={e => e.currentTarget.style.setProperty("background-color", "var(--bgc)")}>
  <i class="fas {icon}"/>
</button>


<style lang="scss">
  button {
    display: grid;
    place-content: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: var(--bgc);
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0 0 5px #000A;
    cursor: pointer;

    &:active {
      box-shadow: 0 0 5px #000A inset;
    }
  }

  i {
    color: var(--txt);
  }
</style>
