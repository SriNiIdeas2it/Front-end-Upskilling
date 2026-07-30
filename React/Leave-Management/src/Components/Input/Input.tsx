import type { InputProps } from "./Input.types";
import "./Input.css";

export default function Input({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  options,
  rows,
  checked,
  className,
}: InputProps) {
  const renderLabel = () =>
    label ? (
      <label className="input-label" htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
    ) : null;

  return (
    <div className={`input-group w-100 ${type === "checkbox" ? "input-group-checkbox" : ""} ${className ?? ""}`}>
      {type !== "checkbox" && renderLabel()}

      {type === "textarea" ? (
        <textarea
          className={`input-field ${className}`}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          disabled={disabled}
          rows={rows ?? 4}
        />
      ) : options ? (
        <select
          className={`input-field ${className}`}
          id={name}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
          disabled={disabled}
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <div className={type === "checkbox" ? "checkbox-wrapper" : ""}>
          <input
            className={type === "checkbox" ? "input-field" : `input-field ${className ?? ""}`}
            type={type}
            id={name}
            name={name}
            placeholder={type === "checkbox" ? undefined : placeholder}
            value={type === "checkbox" ? undefined : value}
            onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
            disabled={disabled}
            required={required}
            checked={checked}
          />
          {type === "checkbox" && renderLabel()}
        </div>
      )}
    </div>
  );
}