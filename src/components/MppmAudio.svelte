<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let duration: number;
  export let position: number;

  const dispatch = createEventDispatcher();

  function onChange(e) {
    dispatch('seek', Number(e.target.value));
  }
</script>

<input type="range" min="0" max={duration || 0} on:change={onChange} value={position || 0} class="slider">

<style lang="scss">
  .slider {
    width: 100%;
    outline: none;
    opacity: 0.7;
    transition: opacity .15s ease-in-out;
    -webkit-appearance: none;
    background: #d3d3d3;
    height: 35px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 35px;
      width: 3px;
      background: #f74bc9;
    }
  }
</style>
