<script lang="ts">
  import TabsManager from './tabsManager.svelte'

  export let userName: string
</script>

<div class="bg-primary w-full h-full rounded flex flex-col">
  <span class="text-text self-left text-2xl font-semibold py-2 px-6"
    >{userName}</span
  >
  <TabsManager />
</div>
