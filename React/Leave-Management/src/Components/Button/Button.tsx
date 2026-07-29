import type { ButtonProps } from "./Button.types"
import "./Button.css"

export default function Button({ label,type, onClick, disabled, className, variant }: ButtonProps){
return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${className} ${variant}`}>
        {label}
    </button>
)
}