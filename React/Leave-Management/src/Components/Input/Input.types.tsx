export interface InputProps {
label?:string
type:string
name?:string
placeholder:string
value?:string
onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
disabled?:boolean
required?:boolean
}