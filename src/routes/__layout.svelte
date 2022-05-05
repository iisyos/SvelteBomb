
<script lang="ts">
	import Header from '$lib/header/Header.svelte'; 
	import '../app.css';
	import type { Unit as UnitType,Label as LabelType } from '../../types'
    import { unitList,set} from '$lib/store';
	import { onMount } from 'svelte';

	let unitsObj:UnitType[];
	unitList.subscribe(value => {
		unitsObj = (value as UnitType[]);
    });
	onMount(()=>{
		console.log('---')

	set()

})
</script>
<Header/>
{#if unitsObj.length !==0}
<div class='app'>
	<div style="max-width: 350px;">		
		<main>
			<slot />
		</main>
	</div>
</div>
{/if}


<style>
	main {
		padding: 4px;
		/* flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		background: rgba(100, 100, 100, 0.3);
		height: 100%; */
	}
	.app{
		display: flex;
		justify-content: center;
		/* background-color: rgba(29,29,29,255); */
	}
</style>
