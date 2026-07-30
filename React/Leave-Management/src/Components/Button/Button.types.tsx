export interface ButtonProps {
    label?: string
    children?: React.ReactNode
    type?: "button" | "submit" | "reset"
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    className?: string
    variant?: "primary" | "secondary" | "danger"
}