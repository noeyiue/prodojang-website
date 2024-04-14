'use client';

import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import { usePathname } from "next/navigation";
import { BanknotesIcon as BanknotesIconSolid, BuildingStorefrontIcon as BuildingStorefrontIconSolid, RocketLaunchIcon as RocketLaunchIconSolid, UserGroupIcon as  UserGroupIconSolid} from "@heroicons/react/24/solid";

interface MenuButtonProps {
  pageName: string;
}

function DropdownMenuButton({ pageName }: MenuButtonProps) {
  const [expanded, setExpanded] = useState(false);
  const currentPath: string = usePathname();  
  const isActive = currentPath.includes(`/${pageName}`);

  useEffect(() => {
    setExpanded(isActive);
  }, []);
  
  let icon = null;
  let textlabel = "";

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const subButtonMap: Record<string, string[]> = {
    "my-dojang": ["manage-course", "student-data"],
    "activity": ["x", "y", "z"],
    "dojang-member": ["all-member", "register-parent", "add-student"],
    "payment": ["one", "two", "three"],
    "competition": ["1", "2"],
    "promotion-test": ["1", "2"],
  };

  switch (pageName) {
    case "my-dojang":
      if (isActive) {
        icon = <BuildingStorefrontIconSolid className="w-5 h-5" />;
      } else {
        icon = <BuildingStorefrontIcon className="w-5 h-5 text-grey" />;
      }
      textlabel = "ยิมของฉัน";
      break;
    case "activity":
      if (isActive) {
        icon = <RocketLaunchIconSolid className="w-5 h-5 " />;

      } else {
        icon = <RocketLaunchIcon className="w-5 h-5 text-grey" />;
      }
      textlabel = "กิจกรรม";
      break;
    case "dojang-member":
      if (isActive) {
        icon = <UserGroupIconSolid className="w-5 h-5 " />;

      } else {
        icon = <UserGroupIcon className="w-5 h-5 text-grey" />;
      }
      textlabel = "สมาชิกของยิม";
      break;
    case "payment":
      if (isActive) {
        icon = <BanknotesIconSolid className="w-5 h-5 " />;

      } else {
        icon = <BanknotesIcon className="w-5 h-5 text-grey" />;
      }
      textlabel = "การชำระเงิน";
      break;
  }
  return (
    <div className="my-2">
      <button
        className="btn btn-ghost text-base w-full flex justify-start my-2 "
        onClick={handleClick}
      >
        {icon}
        <span className={`${isActive ? "" : "text-grey"}`}>{textlabel}</span>
        <div className="ml-auto">
          {expanded ?(
            <ChevronUpIcon className={`${isActive ? "w-5 h-5 " : "w-5 h-5 text-grey"}`}/>
          ) : (
            <ChevronDownIcon className={`${isActive ? "w-5 h-5 " : "w-5 h-5 text-grey"}`} />
          )}
        </div>
      </button>
      {expanded  && (
        <div className="ml-8 mt-1">
          <ul>
            {subButtonMap[pageName].map((subButton) => (
              <MenuButton key={subButton} pageName={`${pageName}/${subButton}`}/>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default DropdownMenuButton;
