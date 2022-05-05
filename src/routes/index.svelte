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
    title: 'My Calendar Today',
    images: [
      {
        url: 'https://00f74ba44b11c93e094c82d500b314bc8391274f25-apidata.googleusercontent.com/download/storage/v1/b/asia.artifacts.lovecounter-eed46.appspot.com/o/containers%2Fimages%2Fa.jpg?jk=AFshE3WsV0bMLuvkbeBeV4goPOmdql3VJPjinyx7XW65xPgScVaym12FjFn8MUiHrsf2D-rUl0OXsYGFYTvQOf-kTd0NL-5_RroYZO5vAYaVdtwPEJk_8Vnn9eRwELil3jCJAsfintM9pzRcZOCm8-AKKdxyKQGuEUWwu1-GooRxyARPDCiUU0T0n7U2YZHMya6Brbxrdtd-72D_5aMiBq6jdUhLxYWaReAnoJZh6Cbmm_4PnG_RTts-2UoqL35uCrHV3p7dWNETtR1RmWwJUVyOElUrQc6DtPvPRPbLBXj7F9yPo7cPPa9gR_jy4HnWdYdqimbhpal2ysVZKvG8FB-qGf1mlDaTr5HhHNFe8vB41CN9K-FXYtsZqgiQf4qZxWXnTBbz-5nHzgmrzegQfoq0YPtjd95KRzjWStiDh11wtrcCe_2tXhhddNGn3VwnczVRQR7l00mLA3VKb2-NGu9WK6yLiDT5PGvlTdL1AqOTBoqrEJbCdmzMV7zCHCxhaEwETYg0-cYAMbKx2MdX3Zgkviobm9nV3JFvPk9Lzw8m4s90iV_-GWN-VvP_4DYv1-poymJziWSsfpL0q09qDmgnGg8NISZv55hOa4RUB_U6IRoMHlF1jym2EtiPdPWaI0wFn8MfVjzQprYjSLcR33gxNrP03RTC_xkDyGSCYeIaJ65XU8acgqp8tsy39s5atOzoQsDOSqndK2Z_jIvQ21mLRWsotXfXeTk1XV5gWpNIMAeAOgIkejsNJLbpChWKo56PsAH4sWtZ1NSz8trIZJbAgv6bx4FH0Hnx37svu6KuBa9OYeGeHyj_deeTWFybNABkZiWLJLNEjE3vAldnXwxXj3RY-MRStcYm9t9G1XOMIeHy4IMGa8MUGRRkA3ZjQUX1NbXFEBwJGWIibY4GfeU9A9y1L_lEGwfXYupoCbN9edzdAfXKRWHCuE3W-818-K4ESR-EQes4WwXebl87PaF2R6BxPSWOZR8CvmW6CXCWqrF2qTwlpI6sLUhPH2AcfWVR3iE-ihNOnnX1yvoN7WUHLlOLoYGcIIl7IphzcLRB6-ccrurAx-ZX__44h3witEDosh5FUoW247acUt0yf7pqfA4YCg8tWAVKKPdLIRuOxvPzuTtPK9GrCpz5WzAC5iOI-LiRZlhMqGh9z-nk9FpkAj0MKz39DQ6__bJ5WvDgyBgWahs3_tWH&isca=1',
        alt: 'Og Image Alt'
      }
    ]
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
