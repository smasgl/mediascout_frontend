<script lang="ts">
  import MainView from './lib/components/layouts/mainView.svelte'
  import SideMenu from './lib/components/layouts/sideMenu.svelte'
  import SocialLink from './lib/components/layouts/socialLink.svelte';
</script>

<svelte:head>
  <title>MediaScout</title>
</svelte:head>

<main class="bg-background h-screen w-screen flex flex-row p-4 space-x-4">
  <SideMenu />
  <MainView userName="Simon" />
</main>
