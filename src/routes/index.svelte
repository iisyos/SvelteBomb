<script context="module">
	// your script goes here
</script>

<script lang="ts">
	import Unit from '$parts/unit.svelte';
	import Week from "$parts/Week.svelte"; 
	import type { Unit as UnitType,Label } from '../../types'
	import { unitList,shuffle, set} from '$lib/store';
	import { onMount } from 'svelte';
onMount(()=>{
	set()
})



// const today = new Date();

// // 今月1日
// const firstDayOfMonth = new Date(today);
// firstDayOfMonth.setDate(1);

// // 1日が属する週の日曜日
// const firstDayOfFirstWeek = new Date(firstDayOfMonth);
// firstDayOfFirstWeek.setDate(1 - firstDayOfMonth.getDay());

// // 表示するすべての日曜日
// const sundays = Array.from(Array(6).keys(), (i) => {
//   const sunday = new Date(firstDayOfFirstWeek);
//   sunday.setDate(sunday.getDate() + 7 * i);
//   return sunday;
// }).filter((date, i) => i === 0 || date.getMonth() === today.getMonth());

</script>
<div class='wrapper'>
	{#each Array.from(Array(35)) as _,i}
		<Unit day={i}/>
	{/each}
</div>
<div class="days">
    <!-- {#each sundays as sunday}
		<Week startDate={sunday} />
    {/each} -->
  </div>
<button on:click="{()=>{shuffle()}}">shuffle</button>


<style>
	.wrapper{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}


</style>
