import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Unit,Label } from '../../types'


const nameList=['あかり','ひな','ちか','ゆか']
const todoList=[{todo:'とデート',color:'pink'},{todo:'に告白',color:'red'},{todo:'と買い物',color:'yellow'},
                {todo:'と水族館',color:'blue'},{todo:'とユニバ',color:'purple'},{todo:'と食事🍚',color:'white'},{todo:'と電話📞',color:'grey'}]
export const unitList:Writable<Unit[]> = writable([]);


export function set(){
    const aaa=hoge()
    unitList.set(aaa)

}
export function shuffle(){
    // unitList.set(hoge())
    const now: Date = new Date();
	const prePad: number = new Date( now.getFullYear(), now.getMonth(), 1 ).getDay();
	const lastDay: number = new Date( now.getFullYear(), now.getMonth() + 1, 0 ).getDate();
    console.log(lastDay)
    unitList.update((unit)=>{      
        unit = hoge();  
            return unit;
    })
}

function hoge ():Unit[]{
    console.log('hoge')
    let oldUnits:Unit[]=[];
        for (let day = 0; day < 35 ; day++) {
            const labelMass = Math.floor(Math.random() * (4));            
            let labels:Label[]=[]            
            for (let num = 0; num < labelMass; num++) {
                const ramdomName = nameList[Math.floor(Math.random() * nameList.length)]
                const ramdomTodo = todoList[Math.floor(Math.random() * todoList.length)]
                const labelObj={name:ramdomName,todo:ramdomTodo.todo,color:ramdomTodo.color} as Label;
                labels=[...labels,labelObj]                
            }
    
            const unitsObj = {day:day,mass:labelMass,isRight:(day+1) % 7 === 0,isBottom:day > 27,labels:labels} as Unit
            oldUnits = [...oldUnits,unitsObj];
                   
        }
  
    return oldUnits;
}
