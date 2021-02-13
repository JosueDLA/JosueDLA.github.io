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
    console.log("rendered");
    window.addEventListener("scroll", toggleShow);
  }, []);

  useEffect(() => {
    console.log("updated");
  }, [visible]);

  return [visible, setVisible] as const;
};
