type Options = {
  label: string;
  value: string;
}[];

export interface RadioGroupProps {
  label: string;
  value: string;
  options: Options;
  changeValue: (newValue: string) => void;
}
