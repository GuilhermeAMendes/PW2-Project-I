// Types
import type { NumberFieldProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const NumberField = ({
  label,
  value,
  changeValue,
}: NumberFieldProps) => {
  const handleChangeTextValue = (newValue: number) => {
    if (isNaN(newValue) || newValue < 0) return;
    changeValue(newValue);
  };

  const hasContent = value >= 0;

  const labelClass = `${styles.numberFieldLabel} ${
    hasContent ? styles.hasContent : ""
  }`;

  return (
    <div className={styles.numberField}>
      <label className={labelClass}>{label}</label>
      <input
        className={styles.numberFieldInput}
        type="number"
        min={0}
        onChange={(event) => handleChangeTextValue(Number(event.target.value))}
        value={value}
      />
    </div>
  );
};

export default NumberField;
