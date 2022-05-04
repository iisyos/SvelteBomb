<script lang="ts">

    import Label from "./Label.svelte";
	import type { Unit as UnitType,Label as LabelType } from '../../types'
    import { unitList} from '$lib/store';
    export let day:number;

	let unitsObj:UnitType;
	unitList.subscribe(value => {
		unitsObj = (value as UnitType[])[day];
    });

    
</script>

<div class="unit {(day+1)%7===0?'right-border':''} {day>27?'bottom-border':''}">
    <div class="day">
        {day}
    </div>
    {#if unitsObj}
    {#each unitsObj.labels as label}
    <div class='label-wrapper'>
        <Label  {label}/>
    </div>
    {/each}
    {:else}
    {/if}
</div>

<style>
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
    .day{
        width: 20%;
        aspect-ratio: 10/16;
        position: relative;
        top: 0;
        left: 0;
        font-size: 10px;
        font-family: system-ui;
        padding:0 1px 2px;
      /* transform: scale(0.5); */
    }
    .right-border{
        border-right: 1px solid !important;
        border-color:rgba(10, 10, 10,0.1)!important ;      
    }
    .bottom-border{
        border-bottom: 1px solid!important;
        border-color:rgba(10, 10, 10,0.1)!important;
    }
    .label-wrapper{
        padding-right: 1px;
        padding-left: 1px;
    }

    .unit{
        width: calc(95%/7);
        aspect-ratio: 10/16;
        background: rgba(10, 10, 10,0.01);
        border: 1px solid;
        border-right: none;
        border-bottom: none;
        border-color:rgba(10, 10, 10,0.1);        
    }

    
</style>