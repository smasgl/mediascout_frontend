<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Input from '../utils/input.svelte'
  import Icon from '../utils/icon.svelte'
  import LoadingSpinner from '../utils/loadingSpinner.svelte'
    import { InputState } from '../../enum/InputState'
    import { createEventDispatcher } from 'svelte'

  export let input = ''
  export let state: InputState
  export let placeHolder: string
  export let enabled: boolean

  let icon: IconData
  let colorClass: string

  const dispatch = createEventDispatcher()
  function change(){
    dispatch('change')
  }

  $: {
    if (state === InputState.VALID) {
      icon = IconData.VALID
      colorClass = 'fill-green-600'
    } else if (state === InputState.INVALID) {
      icon = IconData.INVALID
      colorClass = 'fill-red-600'
    }
  }
</script>

<div class="flex w-full space-x-2 items-center {enabled ? "":"pointer-events-none opacity-75"}">
  <Input iconData={IconData.URL} {placeHolder} bind:value={input} on:change={() => {change()}}/>
  {#if state === InputState.LOADING}
    <LoadingSpinner />
  {:else}
    <Icon iconData={icon} compClass="w-8 {colorClass}" />
  {/if}
</div>
