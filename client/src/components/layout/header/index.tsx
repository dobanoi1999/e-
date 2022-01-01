import React from "react";
import HeaderMenu from "@components/layout/header/HeaderMenu";
import { HeaderStyle } from "./style";
import { BsSearch } from "react-icons/bs";
import CartButton from "@components/ui/CartButton";
import { useAppDispatch } from "@store/hook";
import { UIActions } from "@store/UISlice";

function header() {
  const dispatch = useAppDispatch();
  return (
    <HeaderStyle>
      <div className="header__logo">
        <img src="logo-nb.png" alt="logo" />
        <HeaderMenu data={[]} />
      </div>
      <div>
        <button onClick={() => dispatch(UIActions.setIsShowSearch())}>
          <BsSearch size={20} />
        </button>
        <button>
          <span>Sign In</span>
        </button>
        <CartButton />
      </div>
    </HeaderStyle>
  );
}

export default header;
