<script lang="ts">
  import UserElement from './lib/components/layouts/userElement.svelte'
  import Icon from './lib/components/utils/icon.svelte'
  import {IconData} from './lib/enum/iconData'
</script>

<main class="bg-background h-screen w-screen">
  <Icon size={64} iconData={IconData.YOUTUBE} compClass="fill-red-600" />
  <UserElement
    image="https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s88-c-k-c0x00ffffff-no-rj"
    userName="pewdiepie"
  />
</main>
