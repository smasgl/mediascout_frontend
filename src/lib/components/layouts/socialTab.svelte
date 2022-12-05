<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import {LinkState} from '../../enum/LinkState'
  import IconedButton from '../utils/iconedButton.svelte'
  import Input from '../utils/input.svelte'
  import SocialLink from './socialLink.svelte'
</script>

<div class="flex flex-rol">
  <div class="flex flex-col w-full space-y-2">
    <SocialLink state={LinkState.INVALID} />
    <div class="flex flex-row space-x-2 items-center">
      <Input iconData={IconData.SEARCH} placeHolder="Search..." />
      <IconedButton
        iconData={IconData.DOWNLOAD}
        compClass="fill-accent h-8 w-8"
      />
    </div>
  </div>
</div>
