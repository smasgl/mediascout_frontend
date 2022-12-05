<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'
  import IconedButton from '../utils/iconedButton.svelte'

  export let iconData: IconData
  export let title: string
</script>

<li>
  <div
    class="flex w-full items-center p-2 text-base font-normal rounded-lg text-text hover:bg-primary"
  >
    <Icon {iconData} compClass="fill-text h-8 w-8" />
    <span class="flex-1 ml-3 whitespace-nowrap">{title}</span>
    <IconedButton
      iconData={IconData.DOWNLOAD}
      compClass="fill-accent h-8 w-8"
    />
  </div>
</li>
