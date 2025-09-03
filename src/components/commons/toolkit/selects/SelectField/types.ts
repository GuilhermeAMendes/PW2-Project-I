type Options = {
  label: string;
  value: string;
}[];

export interface SelectFieldProps {
  label: string;
  value: string;
  options: Options;
  changeValue: (newValue: string) => void;
}
