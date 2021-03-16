// @ts-ignore
import { window } from "browser-monads";
import { useState, useEffect } from "react";

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  let targetElement: any = null;

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navListener = () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  };

  useEffect(() => {
    targetElement = document.querySelector("#mobile-menu");

    window.addEventListener("scroll", navListener);

    if (isOpen) {
      const scrollY = document.documentElement.style.getPropertyValue(
        "--scroll-y"
      );
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }

    return () => {
      window.removeEventListener("scroll", navListener);
    };
  }, [isOpen]);

  return [isOpen, toggleNav] as const;
};
