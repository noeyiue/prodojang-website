'use client';

import { useState } from "react";
import { Address, CreateInput } from "thai-address-autocomplete-react";

const InputThaiAddress = CreateInput();

const forgotPassword = () => {
  const [address, setAddress] = useState<Address>({
    district: "", // ตำบล tambol
    amphoe: "", // อำเภอ amphoe
    province: "", // จังหวัด changwat
    zipcode: "", // รหัสไปรษณีย์ postal code
  });

  const handleChange = (scope: string) => (value: string) => {
    setAddress((oldAddr: Address) => ({
      ...oldAddr,
      [scope]: value,
    }));
  };

  const handleSelect = (address: Address) => {
    setAddress(address);
  };

  return (
    <div>
      <label>ตำบล</label>
      <InputThaiAddress.District
        value={address["district"]}
        onChange={handleChange("district")}
        onSelect={handleSelect}
        className={`block w-full px-2.5 pb-2.5 pt-4 h-16 text-base text-grey bg-transparent rounded-lg border first-line:appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer`}
      />
      <label>อำเภอ</label>
      <InputThaiAddress.Amphoe
        value={address["amphoe"]}
        onChange={handleChange("amphoe")}
        onSelect={handleSelect}
      />
      <label>จังหวัด</label>
      <InputThaiAddress.Province
        value={address["province"]}
        onChange={handleChange("province")}
        onSelect={handleSelect}
      />
      <label>รหัสไปรษณีย์</label>
      <InputThaiAddress.Zipcode
        value={address["zipcode"]}
        onChange={handleChange("zipcode")}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default forgotPassword;