// Types
import type { TextFieldProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const TextField = ({ label, value, changeValue }: TextFieldProps) => {
  const handleChangeTextValue = (newValue: string) => {
    changeValue(newValue);
  };

  return (
    <div className={styles.textField}>
      <label className={styles.textFieldLabel}>{label}</label>
      <input
        className={styles.textFieldInput}
        type="text"
        onChange={(event) => handleChangeTextValue(event.target.value)}
        value={value}
      />
    </div>
  );
};

export default TextField;
