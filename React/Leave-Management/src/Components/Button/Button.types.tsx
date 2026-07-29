export interface ButtonProps {
    label?:string
    type?: "button" | "submit" | "reset"
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void
    disabled?:boolean
    className?:string
    variant?: "primary" | "secondary" | "danger"
}