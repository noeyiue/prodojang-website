import { ProcessRegisterInputs, RegisterInputs } from "../../../formtypes";

export const handleFormData = (data: RegisterInputs) => {
    let gym_address: string;
    if (data.gym_address_2 === "") {
        gym_address = `${data.gym_address_1} ${data.gym_province} ${data.gym_amphoe} ${data.gym_district}`.trim();
    } else {
        gym_address = `${data.gym_address_1} ${data.gym_address_2} ${data.gym_province} ${data.gym_amphoe} ${data.gym_district}`.trim();
    }
  const processedData: ProcessRegisterInputs = {
    username: data.username,
    email: data.email,
    password: data.password,
    firstname_th: data.firstname_th,
    lastname_th: data.lastname_th,
    // firstname_en: data.firstname_en,
    // lastname_en: data.lastname_en,
    gym_address: gym_address,
    gym_name: data.gym_name,
    gym_zip_code: data.gym_zip_code,
    telephone: data.telephone,
  };
  return processedData;
};


