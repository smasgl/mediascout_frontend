<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'

  export let link:string;
  export let valid:boolean;
</script>


<div class="flex w-full space-x-2">
  <div class="relative w-full">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <Icon iconData={IconData.LINK} compClass="fill-text w-5"/>
    </div>
    <input type="text" value={link} class="border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-text" placeholder="Account link">
  </div>
  <Icon iconData={valid ? IconData.VALID : IconData.INVALID} compClass="{valid ? "fill-green-600" : "fill-red-600"} w-8"/>
</div>