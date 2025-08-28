// External library
import React from "react";

// Types
import type { FormProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const DefaultForm: React.FC<FormProps> = ({
  children,
  title,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formTitle}>{title}</h2>
      {children}
    </form>
  );
};
