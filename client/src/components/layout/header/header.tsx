import React from "react";
import HeaderMenu from "@components/layout/header/header-menu";

import { BsSearch } from "react-icons/bs";
import CartButton from "@components/ui/CartButton";
import { useAppDispatch } from "@store/hook";
import { UIActions } from "@store/UISlice";

function header() {
  const dispatch = useAppDispatch();
  return (
    <header className="flex justify-between px-8">
      <div className="flex flex-row font-normal text-heading text-sm">
        <img className=" w-32 h-32" src="logo-nb.png" alt="logo" />
        {/* <HeaderMenu data={undefined} /> */}
      </div>
      <div className="grid gap-3 justify-center items-center grid-cols-3">
        <button
          onClick={() => dispatch(UIActions.setIsShowSearch())}
          className="flex justify-center items-center"
        >
          <BsSearch size={20} />
        </button>
        <button className="">
          <span className="font-semibold text-sm text-heading">Sign In</span>
        </button>
        <CartButton />
      </div>
    </header>
  );
}

export default header;
