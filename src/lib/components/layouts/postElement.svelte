<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'

  export let icon: string
  export let title: string


</script>

<button
  type="button"
  class="text-text w-full rounded-md text-sm text-center inline-flex items-center justify-between bg-secondary hover:bg-primary p-2"
>
  {title}
  <div>
    <Icon iconData={IconData.DOWNLOAD} compClass="fill-red-600 h-8 w-8" />
  </div>
</button>
