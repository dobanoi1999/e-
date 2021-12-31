import React, { useRef } from "react";
import Motion from "@components/Motion";

import { fadeInOut } from "@utils/motion/fade-in-out";
import { zoomOutIn } from "@utils/motion/zoom-out-in";

import ModalSearch from "./component/ModalSearch";
import { useAppSelector } from "@store/hook";

const Modal = () => {
  const isModalSearch = useAppSelector((state) => state.UI.isModalSearch);

  return (
    <>
      {isModalSearch && (
        <Motion variants={fadeInOut}>
          <ModalSearch />
        </Motion>
      )}
    </>
  );
};

export default Modal;
