<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import {ButtonStyle} from '../../enum/buttonStyles'
  import {IconData} from '../../enum/iconData'
  import DefaultButton from '../utils/defaultButton.svelte'
  import Input from '../utils/input.svelte'
  import ConfirmationModal from './confirmationModal.svelte'
  import DefaultModal from './defaultModal.svelte'

  export let title: string
  export let open = false

  export let openDialogue = false

  const dispatch = createEventDispatcher()
  function onDeleteClick() {
    dispatch('delete')
  }
  function onSaveClick() {
    dispatch('save')
  }
</script>

<DefaultModal bind:open title={title ? `Edit: ${title}` : 'New profile'}>
  <div class="flex flex-col space-y-2">
    <Input
      iconData={IconData.PROFILE}
      placeHolder="Profile name"
      value={title}
    />
    <div class="flex justify-between rounded bg-red-600 bg-opacity-20 p-2">
      <h5 class="text-sm text-text">
        Don't delete! It is not recommended to delete data from archives. <br />
        (Its the whole point of an archive...)
      </h5>
      <DefaultButton
        text="Delete"
        buttonStyle={ButtonStyle.CANCEL}
        on:click={() => (openDialogue = true)}
      />
    </div>
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
  text={`Are you sure you want to delete the profile: \"${title}\"`}
  bind:open={openDialogue}
  on:confirm={onDeleteClick}
/>
