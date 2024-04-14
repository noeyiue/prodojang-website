import { ListBulletIcon } from "@heroicons/react/24/outline";
import React from "react";
import MenuButton from "../buttons/MenuButton";
import DropdownMenuButton from "../buttons/DropdownMenuButton";

function Slidebar() {

  return (
    <aside className="bg-basebg border-r-2 border-grey-90 fixed top-0 left-0 z-50 w-64 h-screen flex flex-col justify-between overflow-y-auto p-2">
      <div>
        <div className="text-3xl font-Outfit font-bold text-left mx-2 mt-1">
          PRODOJANG
        </div>
        <div className="flex items-center justify-end pr-2">
          <button>
            <ListBulletIcon className="w-8 h-8" />
          </button>
        </div>
        <MenuButton pageName="dashboard"/>
        <DropdownMenuButton pageName="my-dojang"/>
        <DropdownMenuButton pageName="activity"/>
        <DropdownMenuButton pageName="dojang-member"/>
        <DropdownMenuButton pageName="payment"/>
        <MenuButton pageName="information"/>
      </div>
    </aside>
  );
}

export default Slidebar;
