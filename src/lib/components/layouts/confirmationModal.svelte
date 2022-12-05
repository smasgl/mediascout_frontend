<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import {ButtonStyle} from '../../enum/buttonStyles'
  import DefaultButton from '../utils/defaultButton.svelte'
  import Icon from '../utils/icon.svelte'
  import DefaultModal from './defaultModal.svelte'
  import {IconData} from '../../enum/iconData'

  export let open = false
  export let text: string

  const dispatch = createEventDispatcher()
  function onConfirmClick() {
    dispatch('confirm')
    open = false
  }
  function onCancelClick() {
    dispatch('cancel')
    open = false
  }
</script>

<DefaultModal dismissible={false} bind:open maxWidth={'max-w-lg'} title={null}>
  <div class="text-center">
    <Icon
      iconData={IconData.INVALID}
      compClass={'mx-auto mb-4 fill-red-600 w-14 h-14'}
    />
    <h3 class="mb-5 text-lg font-normal dark:text-gray-400">{text}</h3>
  </div>
  <div class="flex justify-center space-x-2">
    <DefaultButton
      text="No, cancel"
      buttonStyle={ButtonStyle.CANCEL}
      on:click={onCancelClick}
    />
    <DefaultButton
      text="Yes, i'm sure"
      buttonStyle={ButtonStyle.CONFIRM}
      on:click={onConfirmClick}
    />
  </div>
</DefaultModal>
