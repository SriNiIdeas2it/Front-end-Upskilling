import type { InputProps } from "./Input.types";
import "./Input.css"
export default function Input({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    disabled,
    required

}:InputProps){
    return(
    <div className="input-group w-100">
        {label && <label className="input-label" htmlFor={name}>{label}{required && <span className="required">*</span>}</label>}
        
        <input
            className="input-field"
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    </div>)
}