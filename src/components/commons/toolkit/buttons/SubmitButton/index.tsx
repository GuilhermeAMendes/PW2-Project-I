// Types
import type { SubmitButtonProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const SubmitButton = ({
  children,
  backgroundColor,
  color,
  border,
  isDisabled = false,
}: SubmitButtonProps) => {
  return (
    <button
      className={styles.submitButton}
      style={{
        backgroundColor,
        color,
        border,
      }}
      type="submit"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
