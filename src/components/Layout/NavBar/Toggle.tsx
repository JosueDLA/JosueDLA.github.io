import { func, string } from "prop-types";
import React from "react";

export interface ToggleProps {
  toggleTheme: () => void;
  theme: string;
}

const Toggle: React.FC<ToggleProps> = (props) => {
  const { theme, toggleTheme, ...rest } = props;

  return (
    <React.Fragment>
      <button onClick={toggleTheme} {...rest}>
        Toggle
      </button>
    </React.Fragment>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
};

export default Toggle;
