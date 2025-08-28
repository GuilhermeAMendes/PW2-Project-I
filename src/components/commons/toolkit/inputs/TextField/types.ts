import type { Dispatch, SetStateAction } from "react";

export interface TextFieldProps {
  label: string;
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}
