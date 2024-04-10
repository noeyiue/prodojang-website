import { ProcessRegisterInputs } from "@/src/components/form/formtypes";
import { API_ROUTES } from "../constants/routes";
import { IApiResponse } from "./apiType";

export const usePostRegister = async (data : ProcessRegisterInputs): Promise<IApiResponse> => {

  try {
    const res = await fetch(API_ROUTES.POST_REGISTER, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
    return {
      ok: res.ok,
      text: () => res.text(),
    };
  } catch (error) {
    throw error;
  }
};
