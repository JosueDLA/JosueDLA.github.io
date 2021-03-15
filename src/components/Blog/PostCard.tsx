import styled from "styled-components";

export const PostCardWrapper = styled.article`
  display: grid;
  padding: 2rem 0;
  align-items: center;
  grid-auto-rows: 1fr;
  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex-basis: 40%;
  overflow: hidden;

  @media (max-width: 640px) {
    flex-basis: 15rem;
  }

  .post-img {
    position: absolute;
    width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  flex-basis: 60%;
  position: relative;
  margin: 0 2rem;

  &:before {
    content: "";
    margin-left: -2rem;
    transform: skewX(-3deg);
    background: var(--bg-secondary);
    width: 2rem;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
  }

  .post-link {
    text-align: right;
    color: var(--accent-primary);
    display: inline-block;
    position: absolute;
    text-decoration: underline;
    cursor: pointer;
    padding-bottom: 1rem;
    right: 0;
    bottom: 0;
  }
`;

export const PostTitle = styled.h2`
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 0.3rem;
    background-color: var(--accent-primary);
    width: 100%;
    border-radius: 0.3rem;
    margin-top: 0.4rem;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const PostDescription = styled.p`
  padding-bottom: 3rem;
  text-align: left;
`;

export const PostCard = styled.article`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  background-color: var(--bg-secondary);
  line-height: 1.4rem;
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  color: var(--text-primary);
  margin: 0 auto;
  justify-content: center;
  box-shadow: 0px 1rem 1.5rem rgba(0, 0, 0, 0.5);

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
