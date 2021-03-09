import styled from "styled-components";

export const PostCardWrapper = styled.article`
  display: grid;
  padding: 2rem 0;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  flex-basis: 40%;
  width: 100%;
  overflow: hidden;

  @media (max-width: 640px) {
    height: 15rem;
  }

  .post-img {
    position: absolute;
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
`;

export const PostTitle = styled.h2`
  font-size: 2rem;

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
`;

export const PostDescription = styled.p`
  padding-bottom: 3rem;
  text-align: left;
`;

export const PostLink = styled.label`
  text-align: right;
  color: var(--accent-primary);
  display: inline-block;
  position: absolute;
  text-decoration: underline;
  cursor: pointer;
  padding-bottom: 1rem;
  right: 0;
  bottom: 0;
`;

export const PostCard = styled.article`
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  background-color: var(--bg-secondary);
  line-height: 1.4rem;
  border-radius: 5px;
  width: 20rem;
  color: var(--text-primary);
  max-width: 60rem;
  max-height: 15rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 640px) {
    flex-direction: column;
    max-height: 25rem;
  }
`;
