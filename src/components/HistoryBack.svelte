<script lang="ts">
  import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte'
</script>

<ion-button on:click={() => history.back() }>
  <IoIosArrowBack/>
</ion-button>
