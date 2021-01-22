import styled from "styled-components";

export const CardRow = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  place-items: center;
  padding-bottom: 4rem;
  overflow-x: hidden;
`;

export const Card = styled.div`
  background: ${(t) => t.theme.bgSecondary};
  max-width: 22rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 1rem 1.5rem rgba(0, 0, 0, 0.5);
`;

export const Banner = styled.div`
  color: ${(t) => t.theme.textPrimary};
  height: 10rem;
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  svg {
    background-color: black;
    width: 10rem;
    height: 10rem;
    box-shadow: 0 0.5rem 1rem rgba(black, 0.3);
    border-radius: 50%;
    transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const CardTittle = styled.h2`
  margin-top: 0;
  text-align: center;
`;

export const CardDesc = styled.p`
  text-align: justify;
  padding: 0 2rem 2.5rem;
`;
