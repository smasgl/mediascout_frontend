<script lang="ts">
  import {ButtonStyle} from '../../enum/buttonStyles'
  import DefaultButton from '../utils/defaultButton.svelte'
  import Icon from '../utils/icon.svelte'
  import DefaultModal from './defaultModal.svelte'
  import {IconData} from '../../enum/iconData'
  import Input from '../utils/input.svelte'
  import {AuthUser} from '../../models/authUser'
  import API from '../../managers/apiManager'
  import {envVariables} from '../../../envVariables'
  import {showAlert} from '../../stores/alertStore'

  export let open = false
  export let authUser: AuthUser | undefined

  // Send login request
  async function onLoginClick() {
    await API.post(
      envVariables.API_AUTH_LOGIN_URL,
      JSON.stringify({
        username: userName,
        password: userPassword,
      })
    )
      .then(res => {
        authUser = new AuthUser(userName, res as string[])
      })
      .catch(err => {
        showAlert.set(`The login failed.`)
      })
    open = false
  }

  let userName: string
  let userPassword: string
</script>

<DefaultModal bind:open maxWidth={'max-w-sm'}>
  <form
    class="flex flex-col space-y-2"
    action="/submit"
    on:submit|preventDefault={onLoginClick}
  >
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
        on:click={() => (open = false)}
      />
      <DefaultButton
        text="Login"
        buttonStyle={ButtonStyle.CONFIRM}
        submittingButton={true}
      />
    </div>
  </form>
</DefaultModal>
