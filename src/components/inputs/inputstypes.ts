import { RegisterInputs } from "../form/formtypes";

interface Option {
  id: string;
  title: string;
}

export interface InputFieldProps {
  type: string;
  id: keyof RegisterInputs;
  textlabel: string;
  register: any;
  errors: any;
  required?: boolean;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate? : any;
  className?: string;
}

export interface SelectFieldProps {
  id: keyof RegisterInputs;
  textlabel: string;
  options: Option[];
  register: any;
  errors: any;
  isRequired?: boolean;
  className?: string;
}
