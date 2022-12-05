<script lang="ts">
  import {createEventDispatcher} from 'svelte'
    import CloseButton from '../utils/closeButton.svelte'

  export let open = true
  export let dismissible = true
  export let title:string|undefined
  export let maxWidth = 'max-w-xl'

  const dispatch = createEventDispatcher()
  function onCloseClick() {
    dispatch('close')
    open = false
  }
</script>

{#if open}
  <div
    class="bg-primary bg-opacity-80 flex flex-row items-center w-full overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-full h-full md:h-auto mx-auto {maxWidth}">
      <div class="relative rounded-lg shadow bg-secondary">
        {#if title}
        <div class="flex justify-between pt-2 px-2">
          <div
            class="h-11.5 mx-2 mt-2 flex justify-between pb-1 w-full border-b rounded-t border-gray-600"
          >
            <h3 class="font-semibold lg:text-xl text-text">
              {title}
            </h3>
            <CloseButton dismissible={dismissible} on:close={onCloseClick}/>
          </div>
        </div>
        {/if}
        <div class="px-4 p-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
{/if}
