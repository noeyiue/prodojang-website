import { API_ROUTES } from "../constants/routes";
import { IApiResponse } from "./apiType";

export const usePostRegister = async (): Promise<IApiResponse> => {
  const submitData = {
    email: "user7@g.c",
    firstname_th: "ชื่อจริง",
    gym_address: "1111",
    gym_name: "tkd",
    gym_zip_code: "11000",
    lastname_th: "นามสกุล",
    password: "password",
    telephone: "0123456789",
    username: "US3Rname"
  };

  // try {
  //   const res = await fetch(API_ROUTES.POST_REGISTER, {
  //     method: 'POST',
  //     body: JSON.stringify(submitData),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });
  //   console.log(res);
    // return {
    //   ok: res.ok,
    //   text: () => res.text()
    // };
  // } catch (error) {
  //   throw error;
  // }
  return {
    ok: true,
    text: "string"
  };
};