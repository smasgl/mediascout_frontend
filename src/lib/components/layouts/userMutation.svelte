<script lang="ts">
  import {createEventDispatcher, onMount} from 'svelte'
  import {ButtonStyle} from '../../enum/buttonStyles'
  import {IconData} from '../../enum/iconData'
  import {User} from '../../models/user'
  import DefaultButton from '../utils/defaultButton.svelte'
  import Input from '../utils/input.svelte'
  import ConfirmationModal from './confirmationModal.svelte'
  import DefaultModal from './defaultModal.svelte'

  export let user: User = null
  export let open = false
  
  let openDialogue = false
  let nameValid = false
  let name = ""
  let newUser = true

  onMount(() => {
    newUser = user == null
    user ??= new User()
    name = user.name
  })

  const dispatch = createEventDispatcher()
  function onDeleteClick() {
    dispatch('delete', {
      user: user,
    })
    open = false
  }
  function onSaveClick() {
    dispatch('save', {
      user: user,
    })
    open = false
  }

  $: nameValid = name?.length >= 3 && name?.length <= 50
</script>

<DefaultModal bind:open title={newUser ? 'New profile' : `Edit: ${user.name}`}>
  <div class="flex flex-col space-y-2">
    <Input
      iconData={IconData.PROFILE}
      placeHolder="Profile name"
      bind:value={name}
    />
    {#if !nameValid}
      <h5 class="text-sm text-red-500">
        The user name has to be between 3 and 50 characters.
      </h5>
    {/if}
    {#if !newUser}
      <div class="flex justify-between rounded bg-red-600 bg-opacity-20 p-2">
        <h5 class="text-sm text-text">
          Don't delete! It is not recommended to delete data from archives. <br
          />
          (Its the whole point of an archive...)
        </h5>
        <DefaultButton
          text="Delete"
          buttonStyle={ButtonStyle.CANCEL}
          on:click={() => (openDialogue = true)}
        />
      </div>
    {/if}
    <div class="flex justify-between border-t pt-2 border-gray-600">
      <DefaultButton
        text="Cancel"
        buttonStyle={ButtonStyle.DEFAULT}
        on:click={() => (open = false)}
      />
      <DefaultButton
        text="Save"
        buttonStyle={ButtonStyle.CONFIRM}
        on:click={onSaveClick}
      />
    </div>
  </div>
</DefaultModal>

<ConfirmationModal
  text={`Are you sure you want to delete the profile: \"${user?.name}\"`}
  bind:open={openDialogue}
  on:confirm={onDeleteClick}
/>
