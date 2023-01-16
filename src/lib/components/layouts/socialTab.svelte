<script lang="ts">
  import {each} from 'svelte/internal'
    import { envVariables } from '../../../envVariables'
  import {IconData} from '../../enum/iconData'
    import { InputState } from '../../enum/InputState'
  import {SocialTabs} from '../../enum/socialTabs'
    import API from '../../managers/apiManager'
    import { isValidTwitterAccountUrl, isValidYouTubeChannelId } from '../../managers/validationManager'
    import type { AuthUser } from '../../models/authUser'
    import type { User } from '../../models/user'
  import type {YoutubeData} from '../../models/youtubeData'
  import {YoutubeVideo} from '../../models/youtubeVideo'
  import ConnectionAlert from '../utils/connectionAlert.svelte'
  import IconedButton from '../utils/iconedButton.svelte'
  import Input from '../utils/input.svelte'
  import PostElement from './postElement.svelte'
  import SocialInput from './socialInput.svelte'

  export let selectedUser: User
  export let tab: SocialTabs
  export let authUser: AuthUser | undefined = undefined

  let socialInputEnabled = false
  let socialInput: string
  let state = InputState.LOADING
  let canFetch:boolean|undefined
  let search = ''
  let posts: YoutubeVideo[] = [
    new YoutubeVideo('asdfasdf', '1', new Date(), '/gagagag'),
  ]

  if (tab === SocialTabs.YOUTUBE) {
    API.get(`${envVariables.API_GET_YOUTUBEDATA}/${selectedUser.id}`)
      .then((res: any[]) => {
        socialInput = res["channel_id"]
      })
      .catch(err => {
        //TODO: Handle errors
        console.log(err)
      })
  } else {
    //TODO: Implement Twitter
  }

  function isChannelIdFetchable(channelId:string) {
      API.post(
          `${envVariables.API_EDIT_YOUTUBEDATA}/${selectedUser.id}`,
        JSON.stringify({
          channel_id: channelId
        })
      )
      .then((res: any[]) => {
        let response = res["Message"]
        canFetch = response === channelId
      })
      .catch(err => {
        //TODO: Handle Errors
        console.log(err)
        canFetch = false
      })
  }

  $: {
    if (tab === SocialTabs.YOUTUBE) {
      state = isValidYouTubeChannelId(socialInput);
      canFetch = undefined
      if (state === InputState.VALID) 
        isChannelIdFetchable(socialInput)
    } else {
      //TODO: Implement Twitter
      state = isValidTwitterAccountUrl(socialInput)
    }

    socialInputEnabled = authUser && authUser.permissions && authUser.permissions.includes(envVariables.PER_EDIT_YOUTUBEDATA)
  }
</script>

<div class="flex flex-rol h-full">
  <div class="flex flex-col w-full space-y-2 h-full">
    <div class="flex flex-row space-x-2 items-center justify-between h-full">
      <div class="md:w-2/3 w-full">
        <SocialInput bind:enabled={socialInputEnabled} bind:input={socialInput} bind:state placeHolder={tab === SocialTabs.YOUTUBE ? "Input channel id" : "Input account link"}/>
      </div>
      <IconedButton
        iconData={IconData.DOWNLOAD}
        compClass="fill-accent h-8 w-8"
      />
    </div>
    {#if canFetch}
      <ConnectionAlert
        {canFetch}
        title="Connected"
        text="The given input is currently valid to fetch data."
      />
    {:else if canFetch === false}
      <ConnectionAlert
        {canFetch}
        title="Not fetchable!"
        text="The given input is not usable to fetch any data."
      />
    {/if}
    <Input
      iconData={IconData.SEARCH}
      placeHolder="Search..."
      bind:value={search}
    />
    <h3
      class="border-t-2 pt-2 border-primary font-semibold text-center text-xl text-text"
    >
      Archive
    </h3>
    <ul class="h-[calc(100vh-19.5rem)] overflow-y-auto">
      {#each posts.filter(x => x.title
          .toLowerCase()
          .includes(search.toLowerCase())) as post}
        <PostElement
          iconData={tab === SocialTabs.YOUTUBE ? IconData.VIDEO : IconData.POST}
          {post}
        />
      {/each}
    </ul>
  </div>
</div>
