<script lang="ts">
    import { IconData } from "../../enum/iconData"
    import Icon from "./icon.svelte"

    export let title:string;
    export let text:string;
</script>

<div class="flex p-4 mb-4 text-sm border rounded-lg text-red-400 border-red-800" role="alert">
    <Icon
        iconData={IconData.WARNING}
        compClass="fill-red-400 h-5 w-5"
    />
    <span class="sr-only">Alert</span>
    <div class="ml-1">
      <span class="font-bold">{title}</span> {text}
    </div>
</div>