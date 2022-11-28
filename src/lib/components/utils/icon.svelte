<script lang="ts">
  import type {IconData} from '../../enum/iconData'

  export let iconData: IconData
  export let compClass: string = ''
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={compClass}
  viewBox="{iconData.viewBox}"
>
  <path d={iconData.path} />
</svg>
<span class="sr-only">{iconData.description}</span>
