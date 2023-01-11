<script lang="ts">
  import TabsManager from './tabsManager.svelte'
  import IconedButton from './../utils/iconedButton.svelte'
  import {IconData} from '../../enum/iconData'
  import SocialTab from './socialTab.svelte'
  import type {User} from '../../models/user'
  import UserMutation from './userMutation.svelte'
  import API from '../../managers/apiManager'
  import { envVariables } from '../../../envVariables'
  import type { AuthUser } from '../../models/authUser'
  import { createEventDispatcher } from 'svelte'
    import { SocialTabs } from '../../enum/socialTabs'

  export let selectedUser: User
  export let authUser: AuthUser | undefined = undefined

  const dispatch = createEventDispatcher()

  let userModalOpened = false

  function onEditUser(event: CustomEvent<{newUser: boolean, user:User}>){
    if(event.detail.newUser)
      return
      
    API.put(envVariables.API_USER_EDIT_URL, JSON.stringify({
      id: event.detail.user.id,
      name: event.detail.user.name
    })).then(() => {
      dispatch("reloadSideMenu")
      selectedUser = selectedUser
    }).catch(err => {
      //TODO: Handle errors
      console.log(err)
    })
  }

  function onDeleteUser(event: CustomEvent<{user:User}>){
    API.del(envVariables.API_USER_DELETE_URL, JSON.stringify({
      id: event.detail.user.id
    })).then(() => {
      dispatch("reloadSideMenu")
      selectedUser = undefined
    }).catch(err => {
      //TODO: Handle errors
      console.log(err)
    })
  }
</script>

<div class="bg-secondary w-full h-full rounded flex flex-col">
  <div class="flex flex-row justify-between items-center px-4 pt-4 ">
    <div class="flex flex-row items-center space-x-2">
      <img
        alt="profile"
        src={selectedUser?.youtube?.imageUrl ?? (envVariables.AVATAR_GENERATION_URL + selectedUser.name + ".svg")}
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
    <IconedButton
      iconData={IconData.DOWNLOAD}
      compClass="fill-accent h-8 w-8"
    />
  </div>
  <TabsManager>
    <div slot="youtube">
      <SocialTab tab={SocialTabs.YOUTUBE}/>
    </div>
    <div slot="twitter">
      <SocialTab tab={SocialTabs.TWITTER}/>
    </div>
  </TabsManager>
</div>

{#if userModalOpened}
  <UserMutation user={selectedUser} on:save={onEditUser} on:delete={onDeleteUser} bind:open={userModalOpened} bind:authUser/>
{/if}
