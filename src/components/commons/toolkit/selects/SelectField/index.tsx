// Types
import type { SelectFieldProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const SelectField = ({
  label,
  value,
  options,
  placeholder,
  changeValue,
}: SelectFieldProps) => {
  const handleChangeSelectValue = (newValue: string) => {
    const isIncludeInListOptions = options.some(
      (item) => item.value === newValue
    );
    if (!isIncludeInListOptions) return;
    changeValue(newValue);
  };

  const hasContent = value.trim() !== "";

  const labelClass = `${styles.selectFieldLabel} ${
    hasContent ? styles.hasContent : ""
  }`;

  return (
    <div className={styles.selectField}>
      <label className={labelClass}>{label}</label>
      <select
        required
        value={value}
        onChange={(event) => handleChangeSelectValue(event.target.value)}
        className={`${styles.selectFieldInput} ${
          !value ? styles.isPlaceholder : ""
        }`}
      >
        <option value="" disabled hidden>
          {placeholder ? placeholder : "Selecione uma opção"}
        </option>
        {options.map((element, index) => (
          <option key={index} value={element.value}>
            {element.label}
          </option>
        ))}
      </select>
    </div>
  );
};
