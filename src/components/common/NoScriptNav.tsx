import React from "react";
import { FaTimes } from "react-icons/fa";
import { css } from "styled-components";
import { noSelect } from "Style/noSelect";

const NoScriptCss = css`
  .no-script {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 3.5rem;
    width: 100%;
    background: var(--bg-secondary);
    font-size: 1rem;
    color: var(--text-primary);
    margin-bottom: 3.5rem;
  }

  @media screen and (${({ theme }) => theme.media.large}) {
    .no-script {
      height: auto;
      flex-direction: column;
    }
  }

  .no-script a {
    color: var(--accent-primary);
  }

  .no-script p {
    margin: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }

  .no-script-bg {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    height: 100vh;
    width: 100vw;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
  }

  .no-script-card {
    color: var(--text-secondary);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 290px;
    background: var(--bg-primary);
    border-radius: 0.3rem;
  }

  #checkbox {
    display: none;
  }

  .button {
    display: block;
    padding: 0.5rem;
    background: var(--accent-secondary);
    border: 1px solid var(--bg-secondary);
    text-align: center;
    font-size: 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    margin: 1rem;
    ${noSelect}
  }

  .button:hover {
    background: var(--accent-primary);
  }

  #checkbox:checked ~ .no-script-bg {
    opacity: 1;
    visibility: visible;
  }

  .title {
    height: 65px;
    color: var(--text-primary);
    background: var(--bg-secondary);
    overflow: hidden;
    border-radius: 0.3rem 0.3rem 0 0;
  }

  .title h2 {
    text-align: center;
    font-weight: normal;
    margin-left: -1rem;
  }

  .close-icon {
    position: absolute;
    right: 1.3rem;
    top: 1.3rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }

  .no-script-card p {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    text-align: left;
  }

  .close-btn {
    position: absolute;
    bottom: 12px;
    right: 25px;
    border: 1px solid var(--accent-primary);
    text-align: center;
    border-radius: 0.3rem;
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    ${noSelect}
  }

  .close-btn:hover {
    background: var(--accent-primary);
  }
`;

export interface NoScriptNavProps {
  navText: string;
  cardTitle: string;
  navBtn?: string;
  cardBtn?: string;
}

const NoScriptNav: React.FC<NoScriptNavProps> = ({
  navText,
  cardTitle,
  navBtn = "Read More",
  cardBtn = "Close",
  children,
}) => {
  return (
    <React.Fragment>
      <style>{NoScriptCss}</style>
      <div className="no-script">
        <input type="checkbox" id="checkbox" />
        <p>{navText}</p>
        <label className="button" htmlFor="checkbox">
          {navBtn}
        </label>

        <label className="no-script-bg">
          <div className="no-script-card">
            <div className="title">
              <h2>{cardTitle}</h2>
              <label htmlFor="checkbox" className="close-icon">
                <FaTimes />
              </label>
            </div>
            <p className="card-text">{children}</p>

            <label htmlFor="checkbox" className="close-btn">
              {cardBtn}
            </label>
          </div>
        </label>
      </div>
    </React.Fragment>
  );
};

export default NoScriptNav;
