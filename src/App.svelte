<script lang="ts">
  import Login from './lib/components/layouts/login.svelte'
  import MainView from './lib/components/layouts/mainView.svelte'
  import NoUserSelected from './lib/components/layouts/noUserSelected.svelte'
  import SideMenu from './lib/components/layouts/sideMenu.svelte'
  import type SocialTab from './lib/components/layouts/socialTab.svelte'
    import FixedAlert from './lib/components/utils/fixedAlert.svelte'
  import type {AuthUser} from './lib/models/authUser'
  import type {User} from './lib/models/user'
    import { showAlert } from './lib/stores/alertStore'

  let selectedUser: User
  let loginOpen = false
  let authUser: AuthUser | undefined
  let sideMenu: SideMenu
  let videoTab: SocialTab
</script>

<svelte:head>
  <title>MediaScout</title>
</svelte:head>

<main class="bg-primary h-screen w-screen flex flex-row p-4 space-x-4">
  <SideMenu
    bind:selectedUser
    bind:loginOpen
    bind:authUser
    bind:videoTab
    bind:this={sideMenu}
  />
  {#if selectedUser}
    <MainView
      bind:selectedUser
      bind:authUser
      bind:videoTab
      on:reloadSideMenu={() => sideMenu.reload()}
    />
  {:else}
    <NoUserSelected />
  {/if}

  {#if loginOpen}
    <Login bind:open={loginOpen} bind:authUser />
  {/if}
</main>

{#if $showAlert}
  <FixedAlert/>
{/if}