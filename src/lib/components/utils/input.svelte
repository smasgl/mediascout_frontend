<script lang="ts">
  import type {IconData} from '../../enum/iconData'
  import Icon from './icon.svelte'

  export let iconData: IconData
  export let placeHolder = ''
  export let value = ''
</script>

<div class="flex w-full h-min">
  <span
    class="inline-flex items-center px-3 text-sm fill-gray-400 bg-gray-600 border border-r-0 border-gray-600 rounded-l-md"
  >
    <Icon {iconData} compClass="w-6" />
  </span>
  <input
    type="text"
    class="rounded-none rounded-r-lg block flex-1 min-w-0 w-full text-sm p-2.5
    bg-gray-700 border-gray-600 border-2 placeholder-gray-400 text-text focus:border-accent outline-0"
    placeholder={placeHolder}
    bind:value
  />
</div>
