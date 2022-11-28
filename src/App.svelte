<script lang="ts">
  import SideMenu from './lib/components/layouts/sideMenu.svelte'
    import TabsManager from './lib/components/layouts/tabsManager.svelte'
</script>

<svelte:head>
  <title>MediaScout</title>
</svelte:head>

<main class="bg-background h-screen w-screen flex flex-row p-4 space-x-4">
  <SideMenu />
  <TabsManager />
</main>
