<script lang="ts">
	import Unit from '$parts/unit.svelte';
	import Week from "$parts/Week.svelte"; 
	import type { Unit as UnitType,Label } from '../../types'
	import { unitList,shuffle, set} from '$lib/store';
	import { onMount } from 'svelte';


onMount(()=>{
	set()
})

</script>

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
