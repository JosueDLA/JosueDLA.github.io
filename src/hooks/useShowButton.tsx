// @ts-ignore
import { window } from "browser-monads";
import { useState, useEffect } from "react";

export const useShowButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleShow = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else if (window.pageYOffset <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      window.addEventListener("scroll", toggleShow);
    }

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", toggleShow);
    };
  });

  return [visible, setVisible] as const;
};
