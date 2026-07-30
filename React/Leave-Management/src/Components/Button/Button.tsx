import type { ButtonProps } from "./Button.types"
import "./Button.css"

export default function Button({ label, children, type = "button", onClick, disabled, className, variant }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant ?? ""} ${className ?? ""}`.trim()}
    >
      {label ?? children}
    </button>
  )
}
