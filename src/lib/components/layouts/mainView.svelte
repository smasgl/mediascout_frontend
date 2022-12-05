<script lang="ts">
  import TabsManager from './tabsManager.svelte'
  import IconedButton from './../utils/iconedButton.svelte'
  import {IconData} from '../../enum/iconData'
  import SocialTab from './socialTab.svelte'

  export let userName: string
</script>

<div class="bg-secondary w-full h-full rounded flex flex-col">
  <div class="flex flex-row justify-between items-center p-4">
    <div class="flex flex-row items-center space-x-2">
      <span class="text-text self-left text-2xl font-semibold py-2"
        >{userName}</span
      >
      <IconedButton
        iconData={IconData.EDIT}
        compIconClass="fill-text h-8 w-8"
      />
    </div>
    <IconedButton
      iconData={IconData.DOWNLOAD}
      compClass="fill-accent h-8 w-8"
    />
  </div>
  <TabsManager>
    <div slot="youtube">
      <SocialTab />
    </div>
    <div slot="twitter">
      <SocialTab />
    </div>
  </TabsManager>
</div>
