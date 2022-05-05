<script lang="ts">
     const today = new Date();
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    const dayFormet =`${today.getMonth()+1}月${today.getDate()}日(${week[today.getDate()-1]})`
	import type { Unit as UnitType,Label as LabelType } from '../../../types'
    import { unitList} from '$lib/store';
    import Button, { Icon } from '@smui/button';
	import { shuffle, set} from '$lib/store';
 

	let unitsObj:UnitType;
	unitList.subscribe(value => {
		unitsObj = (value as UnitType[])[today.getDate()];
    });
    

</script>

<footer>
    <table>
        <tbody style="border-bottom:0.1px solid;border-color: grey;">
            <tr >
                <td class="text" style="border-top:none;">
                    <div class='text-todo'>{dayFormet}</div>
                            <span class="material-symbols-outlined" on:click='{()=>{shuffle()}}'>
                                refresh
                                </span>
                </td>
            </tr>
            {#each unitsObj.labels as label}
            <tr >
                <td class="td-label">
                    <div class="circle {label.color}"></div>
                    <div class="text-todo">{`${label.name}${label.todo}`}</div>
                </td>
            </tr>
            {/each}
            
        </tbody>
    </table>
</footer>

<style>
.material-symbols-outlined {
    font-size: 20px;
  font-weight: bold;
  padding-right: 10px;
  cursor: pointer;
  color: rgba(44,44,44,255);
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
footer {
    border-top: 0.1px solid;
    border-color: grey;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:150px;
}
.td-label-todo{
    display: flex;
    flex-flow: row;
}
.td-label{
    display: flex;
    flex-flow: row;
    align-items: center;
}
.circle{
    height: 10px;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-right: 3px;
}

th,td {
    border: solid 0.1px;
    border-color: grey;
    width: 100%;
    border-bottom: none;  
    border-left: none;           
}
.text-todo{
    font-size: 10px;
    height: 20px;
    display: flex;
    align-items: center;
    flex-flow: row;
}

.text{
     height: 20px;
      font-size: 10px;
      background:  rgba(185, 189, 193,0.3)!important;
      font-family: system-ui;
      display: flex;
    align-items: center;
    flex-flow: row;
    justify-content: space-between;
    } 
table {
    width: 100%;
    border-collapse:  collapse;     
}
.pink{
	background: rgb(255,221,244);
  }
  .red{
	background: rgb(240,128,128);
  }
  .blue{
	background: rgb(113,199,236);
  }
  .green{
    background:rgb(168,231,191)
  }
  .purple{
	background: rgb(207, 159, 255);
  }
  .yellow{
	background: rgb(247, 220, 111);
  }
  .white{
	background: rgb(236, 240, 241 );
  }
  .grey{
	background: rgb(215, 219,221);
  }
</style>
