<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import {SocialTabs} from '../../enum/socialTabs'
  import Icon from '../utils/icon.svelte'

  export let selectedTab = SocialTabs.YOUTUBE

  function onSelectionChange(socialTab: SocialTabs) {
    selectedTab = socialTab
  }
</script>

<div class="p-4 w-full flex flex-col h-full overflow-hidden">
  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500">
    <li class="mr-2">
      <button
        class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent 
                           {selectedTab === SocialTabs.YOUTUBE
          ? 'text-text border-accent'
          : 'hover:text-text hover:border-text group'}"
        on:click={() => onSelectionChange(SocialTabs.YOUTUBE)}
      >
        <Icon
          iconData={IconData.YOUTUBE}
          compClass="mr-2 w-5 h-5
                    {selectedTab === SocialTabs.YOUTUBE
            ? 'fill-red-600'
            : ' fill-gray-500 group-hover:fill-text'}"
        />
        Youtube
      </button>
    </li>
    <li class="mr-2">
      <button
        class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent 
                           {selectedTab === SocialTabs.TWITTER
          ? 'text-text border-accent'
          : 'hover:text-text hover:border-text group'}"
        on:click={() => onSelectionChange(SocialTabs.TWITTER)}
      >
        <Icon
          iconData={IconData.TWITTER}
          compClass="mr-2 w-5 h-5
                    {selectedTab === SocialTabs.TWITTER
            ? 'fill-blue-400'
            : ' fill-gray-500 group-hover:fill-text'}"
        />
        Twitter
      </button>
    </li>
  </ul>

  <section class="w-full h-full mt-2">
    {#if selectedTab === SocialTabs.YOUTUBE}
      <slot name="youtube" />
    {:else if selectedTab === SocialTabs.TWITTER}
      <slot name="twitter" />
    {/if}
  </section>
</div>
