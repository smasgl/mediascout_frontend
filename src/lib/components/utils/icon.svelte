<script lang="ts">
    import type { IconData } from "../../enum/iconData";

    export let size = 64;
    export let iconData:IconData;
    export let compClass:string = "";
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="{compClass}" width="{size}" height="{size}" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
    <path d="{iconData.path}"/>
</svg>
<span class="sr-only">{iconData.description}</span>