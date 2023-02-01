<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'
</script>

<div class="w-full">
  <div class="bg-secondary mx-auto rounded w-fit p-6">
    <div class="items-center">
      <div class="text-center">
        <Icon
          iconData={IconData.NO_USER_SELECTED}
          compClass={'mx-auto fill-red-600 w-20 h-20'}
        />
        <h3 class="mt-1 text-lg font-bold text-gray-400">No user selected!</h3>
        <h3 class="text-lg font-normal text-gray-400">
          Please select a user to continue.
        </h3>
      </div>
    </div>
  </div>
</div>
