<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'

  export let open = true
  export let dismissible = true
  export let title = 'Title'
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
        <div class="flex justify-between p-2">
          <!-- Modal header -->
          <div
            class="h-11.5 m-2 flex justify-between pl-1 pb-2 w-full border-b rounded-t border-gray-600"
          >
            <h3 class="font-semibold lg:text-xl text-text">
              {title}
            </h3>
            {#if dismissible}
              <button
                type="button"
                class="bg-transparent p-0.5 rounded-lg inline-flex items-center hover:bg-primary"
                on:click={onCloseClick}
              >
                <div>
                  <Icon
                    iconData={IconData.CLOSE}
                    compClass="fill-accent h-8 w-8"
                  />
                </div>
              </button>
            {/if}
          </div>
        </div>
        <div class="px-4 pb-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
{/if}
