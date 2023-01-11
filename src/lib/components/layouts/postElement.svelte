<script lang="ts">
  import {IconData} from '../../enum/iconData'
    import type { YoutubeVideo } from '../../models/youtubeVideo'
  import Icon from '../utils/icon.svelte'
  import IconedButton from '../utils/iconedButton.svelte'

  export let iconData: IconData
  export let post: YoutubeVideo
</script>

<li>
  <div
    class="flex w-full items-center p-2 text-base font-normal rounded-lg space-x-3 text-text hover:bg-primary"
  >
    <Icon {iconData} compClass="fill-text h-8 w-8" />
    <span class="whitespace-nowrap font-semibold">{post?.channel_id}</span>
    <span class="flex-1 whitespace-nowrap">{post?.title}</span>
    <span class="whitespace-nowrap">{post?.published_at}</span>
    <IconedButton
      iconData={IconData.DOWNLOAD}
      compClass="fill-accent h-8 w-8"
    />
  </div>
</li>
