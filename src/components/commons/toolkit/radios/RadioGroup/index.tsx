// Types
import type { RadioGroupProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const RadioGroup = ({
  label,
  value,
  options,
  changeValue,
}: RadioGroupProps) => {
  const handleChangeRadioValue = (newValue: string) => {
    const isIncludeInListOptions = options.some(
      (item) => item.value === newValue
    );
    if (!isIncludeInListOptions) return;
    changeValue(newValue);
  };

  const hasContent = value.trim() !== "";

  const labelClass = `${styles.radioFieldLabel} ${
    hasContent ? styles.hasContent : ""
  }`;

  const groupName = label.replace(/\s+/g, "_").toLowerCase();

  return (
    <div className={styles.radioField}>
      <label className={labelClass}>{label}</label>
      <div>
        {options.map((element, index) => (
          <div key={index} className={styles.radioOption}>
            <input
              type="radio"
              name={groupName}
              value={element.value}
              checked={value === element.value}
              onChange={(event) => handleChangeRadioValue(event.target.value)}
              required
            />
            <label>{element.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
