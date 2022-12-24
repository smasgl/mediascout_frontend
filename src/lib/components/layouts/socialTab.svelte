<script lang="ts">
  import {each} from 'svelte/internal'
  import {IconData} from '../../enum/iconData'
  import {LinkState} from '../../enum/LinkState'
  import type {User} from '../../models/user'
  import IconedButton from '../utils/iconedButton.svelte'
  import Input from '../utils/input.svelte'
  import PostElement from './postElement.svelte'
  import SocialLink from './socialLink.svelte'
</script>

<div class="flex flex-rol h-full">
  <div class="flex flex-col w-full space-y-2 h-full">
    <div class="flex flex-row space-x-2 items-center justify-between h-full">
      <div class="md:w-2/3 w-full">
        <SocialLink state={LinkState.INVALID} />
      </div>
      <IconedButton
        iconData={IconData.DOWNLOAD}
        compClass="fill-accent h-8 w-8"
      />
    </div>
    <Input iconData={IconData.SEARCH} placeHolder="Search..." />
    <h3
      class="border-t-2 pt-2 border-primary font-semibold text-center text-xl text-text"
    >
      Archive
    </h3>
    <ul class="h-[calc(100vh-19.5rem)] overflow-y-auto">
      <!--TODO: Implement post list each loop-->
      <PostElement iconData={IconData.VIDEO} title="New Videoooo!" />
      <PostElement iconData={IconData.VIDEO} title="New Videoooo!" />
      <PostElement iconData={IconData.VIDEO} title="New Videoooo!" />
      <PostElement iconData={IconData.VIDEO} title="New Videoooo!" />
      <PostElement iconData={IconData.VIDEO} title="New Videoooo!" />
    </ul>
  </div>
</div>
