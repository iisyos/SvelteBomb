<script lang="ts">
	import Unit from '$parts/unit.svelte';
	import Week from "$parts/Week.svelte"; 
	import type { Unit as UnitType,Label } from '../../types'
	import { unitList,shuffle, set} from '$lib/store';
	import { onMount } from 'svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import type{ MetaTagsProps } from 'svelte-meta-tags';


onMount(()=>{
	set()
})

const metatags: MetaTagsProps = {
    openGraph: {
		type: 'website',
    url: 'https://my-calendar-today.com/',
    title: 'My Calendar',
    description: 'Simplest Calendar',
    images: [
      {
        url: 'https://storage.googleapis.com/asia.artifacts.lovecounter-eed46.appspot.com/containers/images/a.jpg',
        alt: 'Og Image Alt',
		width: 600,
        height: 600,
      }
    ]
    },
    twitter: {
      cardType: 'summary',
	  image:'https://storage.googleapis.com/asia.artifacts.lovecounter-eed46.appspot.com/containers/images/a.jpg'
    }
  };

</script>

<MetaTags {...metatags}/>
<div class='wrapper'>
	{#each Array.from(Array(35)) as _,i}
		<Unit day={i}/>
	{/each}
</div>


<style>
	.wrapper{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}


</style>
