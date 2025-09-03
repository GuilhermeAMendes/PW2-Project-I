// External library
import React, { type FormEvent } from "react";

// Types
import type { FormProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const DefaultForm: React.FC<FormProps> = ({
  children,
  title,
  handleSubmit,
}) => {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={submit} className={styles.formContainer}>
      <h2 className={styles.formTitle}>{title}</h2>
      {children}
    </form>
  );
};

export default DefaultForm;
