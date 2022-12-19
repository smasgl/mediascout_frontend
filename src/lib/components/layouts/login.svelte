<script lang="ts">
    import {createEventDispatcher} from 'svelte'
    import {ButtonStyle} from '../../enum/buttonStyles'
    import DefaultButton from '../utils/defaultButton.svelte'
    import Icon from '../utils/icon.svelte'
    import DefaultModal from './defaultModal.svelte'
    import {IconData} from '../../enum/iconData'
    import Input from '../utils/input.svelte'
  
    export let open = false
  
    function onLoginClick() {
        //TODO: Implement login
      open = false
    }

    let userName:string
    let userPassword:string
  </script>
  
  <DefaultModal bind:open maxWidth={'max-w-sm'}>
    <div class="flex flex-col space-y-2">
        <div class="mx-auto">
            <Icon iconData={IconData.BINOCULARS} compClass="fill-accent w-20" />
        </div>
        <Input
            iconData={IconData.PROFILE}
            placeHolder="Username"
            bind:value={userName}
        />
        <Input
            iconData={IconData.KEY}
            placeHolder="Password"
            bind:value={userPassword}
            password
        />
        <div class="flex justify-between">
          <DefaultButton
            text="No, cancel"
            buttonStyle={ButtonStyle.DEFAULT}
            on:click={() => open = false}
          />
          <DefaultButton
            text="Login"
            buttonStyle={ButtonStyle.CONFIRM}
            on:click={onLoginClick}
          />
        </div>
    </div>
  </DefaultModal>