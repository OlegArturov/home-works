import { DefaultTFuncReturn } from "i18next";

export interface ISelectOption {
  label: string | React.JSX.Element;
  value: string | number;
}

export interface ISelectProps {
  options: ISelectOption[];
  selectLabel?: DefaultTFuncReturn;
  defaultValue: string | number;
  onChange: (newVal: string | number) => void;
}
