<script lang="ts">
    import { createEventDispatcher } from 'svelte'
  import type {IconData} from '../../enum/iconData'
  import Icon from './icon.svelte'

  export let iconData: IconData
  export let compIconClass: string = ''
  export let compClass: string = ''

  const dispatch = createEventDispatcher()
    function onClick() {
        dispatch('click')
    }
</script>

<button type="button" class="{compClass} hover:opacity-75" on:click={onClick}>
  <div>
    <Icon {iconData} compClass={compIconClass} />
  </div>
</button>
