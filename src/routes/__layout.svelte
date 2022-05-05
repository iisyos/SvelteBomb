
<script lang="ts">
	import Header from '$lib/header/Header.svelte'; 
	import Footer from '$lib/footer/Footer.svelte'
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
	<div style="max-width: 570px;">		
		<main>
			<slot />
		</main>
	</div>
	<Footer/>
</div>

{/if}



<style>
	main {
		padding: 4px;
	}
	.app{
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 258px);
		/* background-color: rgba(29,29,29,255); */
	}
</style>
