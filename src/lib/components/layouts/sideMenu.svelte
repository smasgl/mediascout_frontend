<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'
  import IconedButton from '../utils/iconedButton.svelte'
  import Input from '../utils/input.svelte'
</script>

<aside class="min-w-fit w-1/3 h-full" aria-label="Sidebar">
  <div class="p-4 bg-secondary h-full rounded">
    <a href="." class="flex items-center pl-2 mb-5 space-x-2">
      <Icon iconData={IconData.BINOCULARS} compClass="fill-accent w-8" />
      <span
        class="self-center text-xl font-semibold whitespace-nowrap text-text"
        >MediaScout</span
      >
    </a>
    <div class="flex flex-row space-x-2 items-center">
      <Input iconData={IconData.SEARCH} placeHolder="Search..." />
      <IconedButton
        iconData={IconData.ADD}
        compIconClass="w-8 fill-green-600"
      />
    </div>
    <ul class="space-y-2">
      <slot />
    </ul>
  </div>
</aside>
