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
	}
	.corner {
		width: 3em;
		height: 3em;
		max-height: 70px;
	}

</style>
