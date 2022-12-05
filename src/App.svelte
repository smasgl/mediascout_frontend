<script lang="ts">
  import MainView from './lib/components/layouts/mainView.svelte'
  import SideMenu from './lib/components/layouts/sideMenu.svelte'
</script>

<svelte:head>
  <title>MediaScout</title>
</svelte:head>

<main class="bg-primary h-screen w-screen flex flex-row p-4 space-x-4">
  <SideMenu />
  <MainView
    profileName="Simon"
    profilePicture="https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s88-c-k-c0x00ffffff-no-rj"
  />
</main>
