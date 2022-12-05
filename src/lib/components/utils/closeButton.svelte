<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import { IconData } from "../../enum/iconData"
    import Icon from "./icon.svelte"
    export let dismissible = true;

    const dispatch = createEventDispatcher()
    function onCloseClick() {
        dispatch('close')
    }
</script>

{#if dismissible}
<button
  type="button"
  class="bg-transparent p-0.5 rounded-lg inline-flex items-center hover:bg-primary"
  on:click={onCloseClick}
>
  <div>
    <Icon
      iconData={IconData.CLOSE}
      compClass="fill-accent h-8 w-8"
    />
  </div>
</button>
{/if}