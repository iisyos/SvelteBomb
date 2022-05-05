<script lang="ts">

    import Label from "./Label.svelte";
	import type { Unit as UnitType,Label as LabelType } from '../../types'
    import { unitList} from '$lib/store';
    export let day:number;

    const today = (new Date()).getDate() === day+1;

	let unitsObj:UnitType;
	unitList.subscribe(value => {
		unitsObj = (value as UnitType[])[day];
    });
    
</script>

<div class="unit {(day+1)%7===0?'right-border':''} {day>27?'bottom-border':''} {unitsObj.day?'':'none-color'} {today?'today-bg':''}">
    {#if unitsObj.day}
         <div class="day {unitsObj.isSunday?'text-red':''}{unitsObj.isSaturday?'text-blue':''} {today?'today':''}">
            {unitsObj.day}
        </div>
    {/if}

    {#each unitsObj.labels as label}
    <div class='label-wrapper {unitsObj.day?'':'none'}'>
        <Label  {label}/>
    </div>
    {/each}

</div>

<style>
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
    .day{
        width: 27%;
        aspect-ratio: 13/16;
        position: relative;
        top: 0;
        left: 0;
        font-size: 10px;
        font-family: system-ui;
        margin-bottom: 2px;
        font-weight: bold;
        display: flex;
        justify-content: center;
      /* transform: scale(0.5); */
    }
    .today-bg{
        background:  rgba(185, 189, 193,0.3)!important;
    }

    .today{
        background: black;
        color: white;
    }
    .none-color{
        background:rgba(10, 10, 10,0.1)!important ;
    }
    .none{
        display: none;
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
    .text-red{
        color: rgb(255, 68, 51);
    }
    .text-blue{
        color: rgb(31, 117, 254);
    }

    .unit{
        width: calc(95%/7);
        aspect-ratio: 10/16;
        background: rgba(10, 10, 10,0.01) ;
        border: 1px solid;
        border-right: none;
        border-bottom: none;
        border-color:rgba(10, 10, 10,0.1);        
    }

    
</style>