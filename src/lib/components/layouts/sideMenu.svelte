<script lang="ts">
  import {IconData} from '../../enum/iconData'
  import Icon from '../utils/icon.svelte'
  import IconedButton from '../utils/iconedButton.svelte'
  import Input from '../utils/input.svelte'
  import UserElement from './userElement.svelte'
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
      <a href="." class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Admin login</a>
    </div>
    <div class="flex flex-row space-x-2 items-center mb-5">
      <Input iconData={IconData.SEARCH} placeHolder="Search..." />
      <IconedButton
        iconData={IconData.ADD}
        compIconClass="w-8 fill-green-600"
      />
    </div>
    <ul class="h-[calc(100vh-11rem)] overflow-y-auto">
      <!--TODO: Implement user list each loop-->
      <UserElement
        profileName="PewDiePie"
        profilePicture="https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s88-c-k-c0x00ffffff-no-rj"
      />
      <UserElement
        profileName="Logan Paul"
        profilePicture="https://yt3.googleusercontent.com/ytc/AMLnZu_fjSIuuuXROSYXAUX19WYHruPuUsKlylnQZvWcfw=s900-c-k-c0x00ffffff-no-rj"
      />
      <UserElement
        profileName="Andrew Tate"
        profilePicture="https://res.cloudinary.com/dbypkwlyr/images/c_fill,w_518,h_518,f_auto,q_auto/annabelle/TATE/TATE.jpg"
      />
    </ul>
  </div>
</aside>
