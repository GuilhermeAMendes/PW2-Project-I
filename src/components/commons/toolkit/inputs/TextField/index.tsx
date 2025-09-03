// Types
import type { TextFieldProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const TextField = ({ label, value, changeValue }: TextFieldProps) => {
  const handleChangeTextValue = (newValue: string) => {
    changeValue(newValue);
  };

  const hasContent = value.trim() !== "";

  const labelClass = `${styles.textFieldLabel} ${
    hasContent ? styles.hasContent : ""
  }`;

  return (
    <div className={styles.textField}>
      <label className={labelClass}>{label}</label>
      <input
        className={styles.textFieldInput}
        required
        type="text"
        onChange={(event) => handleChangeTextValue(event.target.value)}
        value={value}
      />
    </div>
  );
};

export default TextField;
