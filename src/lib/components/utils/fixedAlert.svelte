<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import { fade, fly } from 'svelte/transition';
    import { IconData } from "../../enum/iconData"
    import { showAlert } from "../../stores/alertStore"
    import Icon from "./icon.svelte"

	function deleteAlert() {
		showAlert.set(null);
	}
</script>

<div in:fly="{{ y: -100, duration: 1000 }}" class="absolute flex justify-center w-full top-0 left-0">
    <div class="xl:w-1/3 md:max-w-xl flex p-4 mt-8 rounded-lg bg-primary text-yellow-300" role="alert">
        <Icon iconData={IconData.WARNING} compClass="fill-yellow-400 w-5 h-5" />
        <div class="ml-3 text-sm font-medium">
            {$showAlert}
        </div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 inline-flex h-8 w-8 text-yellow-300 hover:bg-secondary" data-dismiss-target="#alert-4" aria-label="Close" 
            on:click={deleteAlert}>
        <span class="sr-only">Close</span>
        <Icon iconData={IconData.CLOSE} compClass="fill-yellow-400 w-5 h-5" />
        </button>
    </div>
</div>