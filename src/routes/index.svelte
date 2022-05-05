<script lang="ts">
	import Unit from '$parts/unit.svelte';
	import Week from "$parts/Week.svelte"; 
	import type { Unit as UnitType,Label } from '../../types'
	import { unitList,shuffle, set} from '$lib/store';
	import { onMount } from 'svelte';
  import { MetaTags } from 'svelte-meta-tags';

onMount(()=>{
	set()
})

</script>

<div class='wrapper'>
	{#each Array.from(Array(35)) as _,i}
		<Unit day={i}/>
	{/each}
</div>

<MetaTags
  openGraph={{
    type: 'website',
    url: 'https://my-calendar-today.com/',
    title: 'My Calendar Today'    
  }}
/>


<style>
	.wrapper{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}


</style>
