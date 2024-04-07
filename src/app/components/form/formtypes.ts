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
  gym_address_1: string;
  gym_address_2?: string;
  gym_name: string;
  gym_zip_code: string;
  gym_city: string;
  gym_province: string;
  telephone: string;
};
