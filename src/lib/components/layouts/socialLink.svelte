<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Input from '../utils/input.svelte'
  import Icon from '../utils/icon.svelte'
  import {LinkState} from '../../enum/LinkState'
  import LoadingSpinner from '../utils/loadingSpinner.svelte'

  export let link = ''
  export let state: LinkState

  let icon: IconData
  let colorClass: string

  $: {
    if (state === LinkState.VALID) {
      icon = IconData.VALID
      colorClass = 'fill-green-600'
    } else if (state === LinkState.INVALID) {
      icon = IconData.INVALID
      colorClass = 'fill-red-600'
    }
  }
</script>

<div class="flex w-full space-x-2 items-center">
  <Input iconData={IconData.URL} placeHolder="URL" bind:value={link} />
  {#if state === LinkState.LOADING}
    <LoadingSpinner />
  {:else}
    <Icon iconData={icon} compClass="w-8 {colorClass}" />
  {/if}
</div>
