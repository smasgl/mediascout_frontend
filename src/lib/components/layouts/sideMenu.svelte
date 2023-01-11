<script lang="ts">
  import {envVariables} from '../../../envVariables'
  import {IconData} from '../../enum/iconData'
  import API from '../../managers/apiManager'
  import type {AuthUser} from '../../models/authUser'
  import {User} from '../../models/user'
  import Icon from '../utils/icon.svelte'
  import IconedButton from '../utils/iconedButton.svelte'
  import Input from '../utils/input.svelte'
  import UserElement from './userElement.svelte'
  import UserMutation from './userMutation.svelte'
  import { onMount } from 'svelte'

  export let selectedUser: User
  export let loginOpen = false
  export let authUser: AuthUser | undefined = undefined

  export function reload() {
    onLoadUsers()
  }

  onMount(() => {
    reload()
  })

  let userModalOpened = false
  let search = ''
  let users: User[] = []

  function onSaveProfile(event: CustomEvent<{newUser:boolean, user: User}>) {
    if(!event.detail.newUser)
      return
    API.post(envVariables.API_USER_ADD_URL, JSON.stringify({
      name: event.detail.user.name
    })).then(() => {
      onLoadUsers()
    }).catch(err => {
      //TODO: Handle errors
      console.log(err)
    })
}

  function onDeleteProfile(event: CustomEvent<{user: User}>) {}
  function onLogoutClick() {
    API.get(envVariables.API_AUTH_LOGOUT_URL)
      .then(() => {
        authUser = undefined
      }).catch(err => {
        //TODO: Handle errors
        console.log(err)
      })
  }

  function onLoadUsers() {
    API.get(envVariables.API_USER_GET_URL)
    .then((res:any[]) => {
      try {
        //TODO: Replace youtube id with an object
        users = res.map(u => new User(u.id, u.name, u.youtube_id))
      } catch (error) {
        users = []        
      }
    }).catch(err => {
      //TODO: Handle errors
      console.log(err)
    })
  }
</script>

<aside class="min-w-fit w-1/3 h-full" aria-label="Sidebar">
  <div class="p-4 bg-secondary h-full rounded">
    <div class="flex justify-between">
      <a href="." class="flex items-center pl-2 mb-5 space-x-2">
        <Icon iconData={IconData.BINOCULARS} compClass="fill-accent w-8" />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-text"
          >MediaScout</span
        >
      </a>
      <div>
        {#if authUser}
          <div class="flex space-x-2">
            <button
              on:click={onLogoutClick}
              class="font-normal text-blue-500 hover:underline">Logout</button
            >
            <img
              class="w-8 h-8 rounded-full"
              src={`${envVariables.AVATAR_GENERATION_URL}${authUser.name}.svg`}
              alt="Your profile avatar"
            />
          </div>
        {:else}
          <button
            on:click={() => (loginOpen = true)}
            class="font-normal text-blue-500 hover:underline"
            >Login
          </button>
        {/if}
      </div>
    </div>
    <div class="flex flex-row space-x-2 items-center mb-5">
      <Input
        iconData={IconData.SEARCH}
        placeHolder="Search..."
        bind:value={search}
      />
      {#if authUser && authUser.permissions && authUser.permissions.includes(envVariables.PER_ADD_USER)}
      <IconedButton
      on:click={() => (userModalOpened = true)}
      iconData={IconData.ADD}
      compIconClass="w-8 fill-green-600"
      />
      {/if}
    </div>
    <ul class="h-[calc(100vh-11rem)] overflow-y-auto">
      {#each users.filter(x => x.name
          .toLowerCase()
          .includes(search.toLowerCase())) as user}
        <UserElement
          {user}
          on:click={() => (selectedUser = user)}
          selected={user == selectedUser}
        />
      {/each}
    </ul>
  </div>
</aside>

{#if userModalOpened}
  <UserMutation
    bind:open={userModalOpened}
    on:save={onSaveProfile}
    on:delete={onDeleteProfile}
  />
{/if}
