<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'

  export let image: string
  export let userName: string
</script>

<li>
  <button class="flex w-full items-center p-2 text-base font-normal rounded-lg text-text hover:bg-gray-700">
    <img alt="User profile picture" src={image} class="h-8 w-8" />
    <span class="flex-1 ml-3 whitespace-nowrap">{userName}</span>
    <Icon iconData={IconData.RIGHT_ARROW} compClass="fill-text h-8 w-8" />
  </button>
</li>
