<script lang="ts">
  import MainView from './lib/components/layouts/mainView.svelte'
    import ProfileMutation from './lib/components/layouts/profileMutation.svelte'
  import SideMenu from './lib/components/layouts/sideMenu.svelte'
</script>

<svelte:head>
  <title>MediaScout</title>
</svelte:head>

<main class="bg-primary h-screen w-screen flex flex-row p-4 space-x-4">
  <SideMenu />
  <MainView userName="Simon" />
  <ProfileMutation title="Simon" open={true}/>
</main>
