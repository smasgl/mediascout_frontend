<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from './icon.svelte'

  export let title: string
  export let text: string
  export let canFetch: boolean | undefined
</script>

<div
  class="flex p-4 mb-4 text-sm border rounded-lg {canFetch
    ? 'text-green-400 border-green-800'
    : 'text-red-400 border-red-800'}"
  role="alert"
>
  <Icon
    iconData={canFetch ? IconData.VALID : IconData.WARNING}
    compClass="{canFetch ? 'fill-green-400' : 'fill-red-400'} h-5 w-5"
  />
  <span class="sr-only">Alert</span>
  <div class="ml-1">
    <span class="font-bold">{title}</span>
    {text}
  </div>
</div>
