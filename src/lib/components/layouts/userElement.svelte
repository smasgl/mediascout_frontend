<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'

  export let profilePicture: string
  export let profileName: string
</script>

<li>
  <button class="flex w-full items-center p-2 text-base font-normal rounded-lg text-text hover:bg-secondary">
    <img alt="User profile picture" src={profilePicture} class="h-8 w-8" />
    <span class="flex-1 ml-3 whitespace-nowrap">{profileName}</span>
    <Icon iconData={IconData.RIGHT_ARROW} compClass="fill-text h-8 w-8" />
  </button>
</li>
