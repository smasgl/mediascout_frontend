<script lang="ts">
  import TabsManager from './tabsManager.svelte'
  import IconedButton from './../utils/iconedButton.svelte'
  import {IconData} from '../../enum/iconData'
  import SocialTab from './socialTab.svelte'
  import type {User} from '../../models/user'
  import UserMutation from './userMutation.svelte'
  import API from '../../managers/apiManager'
  import {envVariables} from '../../../envVariables'
  import type {AuthUser} from '../../models/authUser'
  import {createEventDispatcher} from 'svelte'
  import {SocialTabs} from '../../enum/socialTabs'
    import { showAlert } from '../../stores/alertStore'

  export let selectedUser: User
  export let authUser: AuthUser | undefined = undefined
  export let videoTab:SocialTab

  const dispatch = createEventDispatcher()

  let userModalOpened = false

  function onEditUser(event: CustomEvent<{newUser: boolean; user: User}>) {
    if (event.detail.newUser) return

    API.put(
      envVariables.API_USER_EDIT_URL,
      JSON.stringify({
        id: event.detail.user.id,
        name: event.detail.user.name,
      })
    )
      .then(() => {
        dispatch('reloadSideMenu')
        selectedUser = selectedUser
      })
      .catch(err => {
        showAlert.set(`Could not edit user!`)
      })
  }

  function onDeleteUser(event: CustomEvent<{user: User}>) {
    API.del(
      envVariables.API_USER_DELETE_URL,
      JSON.stringify({
        id: event.detail.user.id,
      })
    )
      .then(() => {
        dispatch('reloadSideMenu')
        selectedUser = undefined
      })
      .catch(err => {
        showAlert.set(`Could not delete user!`)
      })
  }
</script>

<div class="bg-secondary w-full h-full rounded flex flex-col">
  <div class="flex flex-row justify-between items-center px-4 pt-4 ">
    <div class="flex flex-row items-center space-x-2">
      <img
        alt="profile"
        src={envVariables.AVATAR_GENERATION_URL + selectedUser.name + '.svg'}
        class="h-10 w-10"
      />
      <span class="text-text self-left text-2xl font-semibold py-2"
        >{selectedUser?.name}</span
      >
      {#if authUser && authUser.permissions && authUser.permissions.includes(envVariables.PER_EDIT_USER)}
        <IconedButton
          on:click={() => (userModalOpened = true)}
          iconData={IconData.EDIT}
          compIconClass="fill-text h-8 w-8"
        />
      {/if}
    </div>
  </div>
  <TabsManager>
    <div slot="youtube">
      <SocialTab bind:this={videoTab} bind:selectedUser tab={SocialTabs.YOUTUBE} bind:authUser/>
    </div>
    <div slot="twitter">
      <SocialTab bind:selectedUser tab={SocialTabs.TWITTER} bind:authUser/>
    </div>
  </TabsManager>
</div>

{#if userModalOpened}
  <UserMutation
    user={selectedUser}
    on:save={onEditUser}
    on:delete={onDeleteUser}
    bind:open={userModalOpened}
    bind:authUser
  />
{/if}
