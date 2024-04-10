import { RegisterInputs } from "@/src/components/form/formtypes";

export interface RegisterState {
    currentStep: number;
    registerFormData: RegisterInputs;
} 