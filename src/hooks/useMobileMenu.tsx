// @ts-ignore
import { window } from "browser-monads";
import { useState, useEffect } from "react";
import { lock, unlock } from "tua-body-scroll-lock";

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  let targetElement: any = null;

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    targetElement = document.querySelector("#mobile-menu");

    if (isOpen) {
      lock();
    } else {
      unlock();
    }
  }, [isOpen]);

  return [isOpen, toggleNav] as const;
};
