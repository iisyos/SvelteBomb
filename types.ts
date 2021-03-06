export type Unit = {
  labels:Label[],
  isRight?:boolean,
  isBottom?:boolean, 
  day:number,
  mass:number,
  isSunday?:boolean,
  isSaturday?:boolean
}
 
export type Label=Name & Todo

export type Name = {
  name:string
}

export type Todo = {
  todo:string,
  color:string
}
