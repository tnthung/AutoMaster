<script lang="ts">
  export let value = false;

  export let onText  = "ON";
  export let offText = "OFF";
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => value = !value} class:flip={value}>
  <span class="front">{offText}</span>
  <span class="back" >{ onText}</span>
</div>


<style lang="scss">
  div {
    position: relative;
    display: inline-block;

    width:  60px;
    height: 30px;

    transform-style: preserve-3d;
    transition: transform 0.25s;

    cursor: pointer;

    font-weight: 900;
    color: #000A;

    perspective: 30px;

    &.flip {
      transform: rotateY(180deg);
    }
  }

  .front, .back {
    position: absolute;
    inset: 0;

    display: grid;
    place-content: center;

    backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;

    line-height: 30px;
    vertical-align: middle;
  }

  .front {
    background-color: var(--neg);
  }

  .back {
    transform: rotateY(180deg);
    background-color: var(--pri);
  }
</style>
