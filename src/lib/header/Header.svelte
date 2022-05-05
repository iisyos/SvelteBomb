<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="corner">
		2022<br/>
		<small>5月</small>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		font-family: system-ui;
		background: rgba(44,44,44,255);
		max-height: 50px;
		box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.5);
	}
	.corner {
		width: 3em;
		height: 3em;
		max-height: 70px;
		padding-left: 5px;
		padding-top: 2px;
		color: aliceblue;
	}

</style>
