// Types
import type { SelectFieldProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const SelectField = ({
  label,
  value,
  options,
  changeValue,
}: SelectFieldProps) => {
  const handleChangeSelectValue = (newValue: string) => {
    const isIncludeInListOptions = options.some(
      (item) => item.value === newValue
    );
    if (!isIncludeInListOptions) return;
    changeValue(newValue);
  };

  return (
    <div className={styles.selectField}>
      <label className={styles.selectFieldLabel}>{label}</label>
      <select
        value={value}
        onChange={(event) => handleChangeSelectValue(event.target.value)}
        className={styles.selectFieldInput}
      >
        {options.map((element, index) => (
          <option key={index} value={element.value}>
            {element.label}
          </option>
        ))}
      </select>
    </div>
  );
};
