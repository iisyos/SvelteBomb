
<script lang="ts">
	import Header from '$lib/header/Header.svelte'; 
	import '../app.css';
</script>

<Header/>
<main>
	<slot />
</main>


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
</style>
