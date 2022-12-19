<script lang="ts">
  import MainView from './lib/components/layouts/mainView.svelte'
  import SideMenu from './lib/components/layouts/sideMenu.svelte'
  import type {User} from './lib/models/user'

  let selectedUser: User
</script>

<svelte:head>
  <title>MediaScout</title>
</svelte:head>

<main class="bg-primary h-screen w-screen flex flex-row p-4 space-x-4">
  <SideMenu bind:selectedUser />
  <MainView bind:selectedUser />
</main>
