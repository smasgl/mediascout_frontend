<script lang="ts">
    import { createEventDispatcher } from 'svelte'
  import {IconData} from '../../enum/iconData'
  import type {YoutubeVideo} from '../../models/youtubeVideo'
  import Icon from '../utils/icon.svelte'
  import IconedButton from '../utils/iconedButton.svelte'

  export let iconData: IconData
  export let post: YoutubeVideo

  const dispatch = createEventDispatcher()
  function onDownloadClick() {
    dispatch('download')
  }
</script>

<li>
  <div
    class="flex w-full items-center p-2 text-base font-normal rounded-lg space-x-3 text-text hover:bg-primary"
  >
    <Icon {iconData} compClass="fill-text h-8 w-8" />
    <span class="whitespace-nowrap opacity-50">{post?.video_id}</span>
    <span class="whitespace-nowrap flex-1 font-semibold">{post?.title}</span>
    <span class="whitespace-nowrap">{new Date(post?.length * 1000).toISOString().slice(11, 19)}</span>
    <span class="whitespace-nowrap">{post?.published_at}</span>
    <IconedButton
      on:click={onDownloadClick}
      iconData={IconData.DOWNLOAD}
      compClass="fill-accent h-8 w-8"
    />
  </div>
</li>
