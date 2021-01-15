import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

export interface ToggleProps {
  toggleTheme: () => void;
  theme: string;
}

const SwitchWrapper = styled.div`
  font-weight: bold;
  font-size: 14px;

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .circle {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(t) => t.theme.accent};
    --webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .circle:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(t) => t.theme.primary};
    --webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .circle {
    background-color: ${(t) => t.theme.accent};
  }

  input:checked + .circle:before {
    content: "";
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Toggle: React.FC<ToggleProps> = (props) => {
  const { theme, toggleTheme } = props;

  return (
    <SwitchWrapper>
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          aria-label="Toggle Theme"
          checked={theme === "dark" ? true : false}
        />
        <div className="circle"></div>
      </label>
    </SwitchWrapper>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
};

export default Toggle;
