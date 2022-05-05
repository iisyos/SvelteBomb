import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Unit,Label } from '../../types'


const nameList=['陽奈','千佳','ゆか','ゆうり','りな','きさき','環奈','くるみ','愛美','ユリア','さやか','香里奈','絢香']
const todoList=[{todo:'とデート💕',color:'pink'},{todo:'に告白',color:'red'},{todo:'と買い物',color:'yellow'},
                {todo:'と水族館',color:'blue'},{todo:'とユニバ',color:'purple'},{todo:'と食事🍚',color:'white'},{todo:'と電話📞',color:'grey'},{todo:'記念日✨',color:'green'}]


export const unitList:Writable<Unit[]> = writable([]);

export function set(){
    const aaa=initialize()
    unitList.set(aaa)
}

export function shuffle(){
    // unitList.set(initialize())
    const now: Date = new Date();
	const prePad: number = new Date( now.getFullYear(), now.getMonth(), 1 ).getDay();
	const lastDay: number = new Date( now.getFullYear(), now.getMonth() + 1, 0 ).getDate();
    console.log(lastDay)
    unitList.update((unit)=>{      
        unit = initialize();  
            return unit;
    })
}

function initialize ():Unit[]{
    const today = new Date();


const firstDayOfMonth = new Date(today);
firstDayOfMonth.setDate(1);

const days = Array.from(Array(35).keys(), (i) => {
  const day = new Date(firstDayOfMonth.setDate(i+1));
  return day;
}).filter((date, i) => i === 0 || date.getMonth() === today.getMonth());
    let oldUnits:Unit[]=[];
        for (let num = 0; num < 35 ; num++) {
            const labelMass = Math.floor(Math.random() * (4));            
            let labels:Label[]=[];
            const day = num < days.length? days[num].getDate():0;
            const dayOfWeek= num < days.length? days[num].getDay():'';
            if( num < days.length)console.log(days[num].getDate())
            
            for (let num = 0; num < labelMass; num++) {
                const ramdomName = nameList[Math.floor(Math.random() * nameList.length)]
                const ramdomTodo = todoList[Math.floor(Math.random() * todoList.length)]
                const labelObj={name:ramdomName,todo:ramdomTodo.todo,color:ramdomTodo.color} as Label;
                labels=[...labels,labelObj]                
            }
            const unitsObj = {day:day,mass:labelMass,isRight:(num+1) % 7 === 0,
                isBottom:num > 27,labels:labels,isSunday:dayOfWeek===0,isSaturday:dayOfWeek===6} as Unit
            oldUnits = [...oldUnits,unitsObj];                   
        }
    return oldUnits;
}

