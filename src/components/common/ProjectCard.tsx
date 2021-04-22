import styled, { css } from "styled-components";
import { noSelect } from "Style/noSelect";

export const ProjectCardWrapper = styled.article`
  display: grid;
  gap: 2rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 20rem);
  padding-bottom: 4rem;
  justify-content: space-evenly;

  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.8em;
  line-height: 1.5em;
  text-align: center;
`;

export const ProjectDescription = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  margin-top: 1em;
`;

export const ProjectTags = styled.div`
  display: flex;
  align-self: center;

  .tag {
    background: rgba(255, 255, 255, 0.5);
    color: white;
    text-decoration: none;
    transition: all, 0.5s;
    border-radius: 0.3rem;
    margin-right: 0.5em;
    line-height: 1.5em;
    font-size: 0.75em;
    padding: 0 0.5em;
    cursor: pointer;
  }
`;

const Button = css`
  display: inline-block;
  padding: 0.5rem;
  background: var(--accent-primary);
  border: 1px solid var(--accent-primary);
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin: 0;
  width: 30%;

  ${noSelect}

  &:hover {
    background: transparent;
  }

  &:active {
    background: var(--accent-primary);
  }
`;

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  .left {
    ${Button}
    border-radius: 0.3rem 0 0 0.3rem;
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }

  .right {
    ${Button}
    border-radius: 0 0.3rem 0.3rem 0;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const ProjectCard = styled.article`
  position: relative;
  display: flex;
  width: 90%;
  max-width: 18rem;
  margin: auto;
  background-color: var(--bg-video);
  border: 10px solid var(--bg-secondary);
  color: white;
  border-radius: 1em;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;

  .project-img {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`;

export const ProjectContent = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 1rem 1rem;
  bottom: 0;
  transition: all, 0.5s;

  &:hover {
    transform: rotate(0);
    color: white;
  }

  &:before,
  &:after {
    content: "";
    transform: scale(0);
    transform-origin: top left;
    border-radius: 50%;
    position: absolute;
    left: -50%;
    top: -50%;
    z-index: -5;
    transition: all, 0.5s;
    transition-timing-function: ease-in-out;
  }

  &:before {
    background-color: var(--bg-secondary);
    width: 250%;
    height: 250%;
    opacity: 0.5;
  }

  &:after {
    background-color: var(--bg-secondary);
    width: 200%;
    height: 200%;
    opacity: 0.5;
  }

  &:hover:before,
  x &:hover:after {
    transform: scale(1);
  }

  &:hover ${ProjectTags} .tag {
    background: var(--accent-primary);
    color: white;
  }
`;
