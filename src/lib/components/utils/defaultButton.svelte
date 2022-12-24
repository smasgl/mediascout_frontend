<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import type {ButtonStyle} from '../../enum/buttonStyles'

  export let text: string
  export let buttonStyle: ButtonStyle
  export let submittingButton = false

  const dispatch = createEventDispatcher()
  function onClick() {
    dispatch('click')
  }
</script>

<button
  type="{submittingButton ? "submit": "button"}"
  on:click={onClick}
  class="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-text {buttonStyle}"
>
  {text}
</button>
