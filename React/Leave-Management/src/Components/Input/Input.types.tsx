export interface InputOption {
  label: string;
  value: string;
}

export interface InputProps {
  label?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?:
    | ((e: React.ChangeEvent<HTMLInputElement>) => void)
    | ((e: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | ((e: React.ChangeEvent<HTMLSelectElement>) => void);
  disabled?: boolean;
  required?: boolean;
  options?: InputOption[];
  rows?: number;
  checked?: boolean;
  className?: string;
}