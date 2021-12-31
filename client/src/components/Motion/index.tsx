import React, { ReactComponentElement, useEffect } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface PropType {
  children: any;
  onSetView: (inview: Boolean) => void;
  element: string;
}

function FadeInWhenVisible({
  children,
  onSetView,
  element = "div",
  ...props
}: PropType) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (inView) {
      timer = setTimeout(() => {
        controls.start("visible");
      }, 100);
      onSetView(inView);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [controls, inView]);
  const Component = motion[element] as ReactComponentElement;

  return (
    <Component {...props} ref={ref} initial="hidden" animate={controls}>
      {children}
    </Component>
  );
}
FadeInWhenVisible.propTypes = {
  children: PropTypes.any,
  onSetView: PropTypes.func,
  element: PropTypes.string,
};

FadeInWhenVisible.defaultProps = {
  onSetView: () => {},
  element: "div",
};

export default FadeInWhenVisible;
