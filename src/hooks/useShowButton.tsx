// @ts-ignore
import { window } from "browser-monads";
import { useEffect, useState } from "react";

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
    window.addEventListener("scroll", toggleShow);
  }, []);

  return [visible, setVisible] as const;
};
