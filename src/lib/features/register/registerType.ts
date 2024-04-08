import { RegisterInputs } from "@/src/app/components/form/formtypes";

export interface RegisterState {
    currentStep: number;
    registerFormData: RegisterInputs;
} 