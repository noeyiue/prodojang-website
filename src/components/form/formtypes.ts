export type LoginInputs = {
  username: string;
  password: string;
};

export type RegisterInputs = {
  username: string;
  email: string; 
  password: string;
  cpassword: string;
  firstname_th: string;
  lastname_th: string;
  firstname_en: string;
  lastname_en: string;
  gym_address_1: string;
  gym_address_2?: string;
  gym_name: string;
  gym_zip_code: string;
  gym_province: string;
  gym_amphoe: string;
  gym_district: string;
  telephone: string;
};

export type ProcessRegisterInputs = {
  username: string;
  email: string; 
  password: string;
  firstname_th: string;
  lastname_th: string;
  // firstname_en: string;
  // lastname_en: string;
  gym_address: string;
  gym_name: string;
  gym_zip_code: string;
  telephone: string;
};

