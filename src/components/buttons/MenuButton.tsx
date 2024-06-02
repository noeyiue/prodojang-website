"use client";

import {
  ChartBarIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ChartBarIcon as ChartBarIconSolid,
  InformationCircleIcon as InformationCircleIconSoild,
} from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

interface MenuButtonProps {
  pageName: string;
}

function MenuButton({ pageName }: MenuButtonProps) {
  const currentPath: string = usePathname();
  const isActive = currentPath.endsWith(`/${pageName}`);
  const router = useRouter();
  let icon = null;
  let textlabel = "";

  switch (pageName) {
    case "dashboard":
      if (isActive) {
        icon = <ChartBarIconSolid className="w-5 h-5" />;
      } else {
        icon = <ChartBarIcon className="w-5 h-5 text-grey" />;
      }
      textlabel = "หน้าสรุป";
      break;
    case "information":
      if (isActive) {
        icon = <InformationCircleIconSoild className="w-5 h-5" />;
      } else {
        icon = <InformationCircleIcon className="w-5 h-5 text-grey" />;
      }
      textlabel = "ติดต่อเจ้าหน้าที่";
      break;
    case "my-dojang/manage-course":
      textlabel = "- จัดการคอร์สเรียน";
      break;
    case "my-dojang/student-data":
      textlabel = "- ข้อมูลนักเรียน";
      break;
    case "dojang-member/all-member":
      textlabel = "- นักเรียน (ไม่แน่ใจ)";
      break;
    case "dojang-member/add-student":
      textlabel = "- เพิ่มนักเรียน";
      break;
    default:
      textlabel = `- ${pageName}`;
  }
  const handleClick = () => {
    router.push(`/member/${pageName}`);
  };

  return (
    <button
      className={`btn text-base w-full flex justify-start my-2 ${
        isActive ? "bg-gray-200 border-0 drop-shadow-lg" : "btn-ghost"
      }`}
      onClick={handleClick}
    >
      {icon}

      <span className={`${isActive ? "" : "text-grey"}`}>{textlabel}</span>
    </button>
  );
}

export default MenuButton;
