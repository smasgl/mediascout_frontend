<script lang="ts">
    import { IconData } from '../../enum/iconData'
import Icon from '../utils/icon.svelte'
    import PostElement from './postElement.svelte'
    import SocialLink from './socialLink.svelte'
    import UserElement from './userElement.svelte'

</script>
<aside class="w-80 p-4 h-full" aria-label="Sidebar">
    <div class="p-4 bg-primary h-full rounded">
       <a href="." class="flex items-center pl-2 mb-5 space-x-2">
          <Icon iconData={IconData.BINOCULARS} compClass="fill-accent w-8"/>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MediaScout</span>
       </a>
       <ul class="space-y-2">
        <PostElement iconData={IconData.VIDEO} title="New video!!!!"/>
        <UserElement profileName="fadsfasdf" profilePicture="https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj-mo"/>
        <SocialLink link="fasdfasdf" valid={true}/>
    </ul>
    </div>
 </aside>