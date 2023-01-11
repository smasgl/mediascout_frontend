<script lang="ts">
  import {each} from 'svelte/internal'
  import {IconData} from '../../enum/iconData'
  import { LinkState } from '../../enum/LinkState'
    import { SocialTabs } from '../../enum/socialTabs'
    import { isValidTwitterAccountUrl, isValidYouTubeChannelUrl } from '../../managers/urlValidator'
    import type { YoutubeData } from '../../models/youtubeData'
    import { YoutubeVideo } from '../../models/youtubeVideo'
    import Alert from '../utils/alert.svelte'
  import IconedButton from '../utils/iconedButton.svelte'
  import Input from '../utils/input.svelte'
  import PostElement from './postElement.svelte'
  import SocialLink from './socialLink.svelte'

  export let tab:SocialTabs

  let link:string;
  let state:LinkState = LinkState.LOADING;
  let canFetch = false
  let search = ''
  let posts:YoutubeVideo[] = [new YoutubeVideo("asdfasdf", "1", new Date(), "/gagagag")]

  if(tab === SocialTabs.YOUTUBE){

  }
  else{

  }

  $:{
    if(tab === SocialTabs.YOUTUBE)
      state = isValidYouTubeChannelUrl(link);
    else
      state = isValidTwitterAccountUrl(link);
  }
</script>

<div class="flex flex-rol h-full">
  <div class="flex flex-col w-full space-y-2 h-full">
    <div class="flex flex-row space-x-2 items-center justify-between h-full">
      <div class="md:w-2/3 w-full">
        <SocialLink bind:link={link} bind:state={state} />
      </div>
      <IconedButton
        iconData={IconData.DOWNLOAD}
        compClass="fill-accent h-8 w-8"
      />
    </div>
    {#if !canFetch}
      <Alert title="Not fetchable!" text="The currently used link does not provide sufficient information to fetch any data."/>
    {/if}
    <Input iconData={IconData.SEARCH} placeHolder="Search..." bind:value={search}/>
    <h3
      class="border-t-2 pt-2 border-primary font-semibold text-center text-xl text-text"
    >
      Archive
    </h3>
    <ul class="h-[calc(100vh-19.5rem)] overflow-y-auto">
      <!--TODO: Implement post list each loop-->

      {#each posts.filter(x => x.title
        .toLowerCase()
        .includes(search.toLowerCase())) as post}
        <PostElement iconData={tab === SocialTabs.YOUTUBE ? IconData.VIDEO : IconData.POST} {post}/>
      {/each}
    </ul>
  </div>
</div>
