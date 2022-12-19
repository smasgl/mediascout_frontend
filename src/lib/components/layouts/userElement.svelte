<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import {IconData} from '../../enum/iconData'
  import type {User} from '../../models/user'
  import Icon from '../utils/icon.svelte'

  export let user: User
  export let selected = true

  const dispatch = createEventDispatcher()
  function onUserClick() {
    dispatch('click', {
      user: user,
    })
  }
</script>

<li>
  <button
    on:click={onUserClick}
    class="flex w-full items-center p-2 text-base font-normal rounded-lg text-text {selected ? "bg-primary bg-opacity-60" : "bg-transparent"} hover:bg-primary"
  >
    <img alt="profile" src={user.youtube.imageUrl} class="h-8 w-8" />
    <span class="flex-1 ml-3 whitespace-nowrap">{user.name}</span>
    <Icon iconData={IconData.RIGHT_ARROW} compClass="{selected ? "fill-accent" : "fill-text"} h-8 w-8" />
  </button>
</li>
