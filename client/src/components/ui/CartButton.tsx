import React from "react";
import { CgShoppingBag } from "react-icons/cg";
function CartButton() {
  return (
    <button className="relative flex justify-center items-center">
      <CgShoppingBag size={20} />
      <span className="absolute text-sm px-2 text-white bg-gray-900 font-bold rounded-full -top-3 right-0">
        0
      </span>
    </button>
  );
}

export default CartButton;
