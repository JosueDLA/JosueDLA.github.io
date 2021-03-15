import styled from "styled-components";
import { noSelect } from "./../../style/noSelect";

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  box-align: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: var(--bg-secondary);
  color: var(--text-primary);
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 1rem 1.5rem rgba(0, 0, 0, 0.5);
  justify-content: space-evenly;

  @media (max-width: 1495px) {
    margin: 0 auto;
  }

  ${noSelect}
`;

export const Banner = styled.div`
  color: var(--text-primary);
  height: 10rem;
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  .card-img {
    background-color: black;
    width: 10rem;
    height: 10rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }
`;

export const CardTitle = styled.h2`
  margin-top: 0;
  text-align: center;
`;

export const CardDesc = styled.p`
  text-align: center;
  padding: 0 2rem 2.5rem;
`;
