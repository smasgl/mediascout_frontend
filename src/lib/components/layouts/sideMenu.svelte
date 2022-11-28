<script lang="ts">
    import { IconData } from '../../enum/iconData'
import Icon from '../utils/icon.svelte'

</script>
<aside class="w-80 h-full" aria-label="Sidebar">
    <div class="p-4 bg-primary h-full rounded">
       <a href="." class="flex items-center pl-2 mb-5 space-x-2">
          <Icon iconData={IconData.BINOCULARS} compClass="fill-accent w-8"/>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MediaScout</span>
       </a>
       <ul class="space-y-2">
          <slot/>
       </ul>
    </div>
 </aside>