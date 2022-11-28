<script lang="ts">
    import {IconData} from '../../enum/iconData'
    import Icon from './icon.svelte'
  
    export let iconData: IconData
    export let compIconClass: string = ''
    export let compClass: string = ''
</script>
  
<button
  type="button"
  class="{compClass} hover:opacity-75">
  <div>
    <Icon {iconData} compClass="{compIconClass}"/>
  </div>
</button>
