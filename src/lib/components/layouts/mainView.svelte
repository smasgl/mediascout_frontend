<script lang="ts">
  import TabsManager from './tabsManager.svelte'
  import IconedButton from './../utils/iconedButton.svelte'
  import {IconData} from '../../enum/iconData'
  import SocialTab from './socialTab.svelte'

  export let userName: string
</script>

<div class="bg-primary w-full h-full rounded flex flex-col">
  <div class="flex flex-row justify-between items-center p-4">
    <span class="text-text self-left text-2xl font-semibold py-2"
      >{userName}</span
    >
    <IconedButton
      iconData={IconData.DOWNLOAD}
      compClass="fill-accent h-8 w-8"
    />
  </div>
  <TabsManager>
    <div slot="youtube">
      <SocialTab />
    </div>
  </TabsManager>
</div>
