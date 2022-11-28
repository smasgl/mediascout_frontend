<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'

  export let image: string
  export let userName: string
</script>

<button
  type="button"
  class="text-text w-full rounded-md text-sm text-center inline-flex items-center justify-between bg-secondary hover:bg-primary p-2"
>
  <img alt="User profile picture" src={image} class="h-8 w-8" />
  {userName}
  <div>
    <Icon iconData={IconData.RIGHT_ARROW} compClass="fill-red-600 h-8 w-8" />
  </div>
</button>
