import styled from "styled-components";

export const PostCardWrapper = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  place-items: center;
  padding-bottom: 4rem;
`;

export const PostTitle = styled.h3`
  margin: 0;
  font-size: 1.8em;
  line-height: 1.5em;
  text-align: center;
`;

export const PostDescription = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  margin-top: 1em;
`;

export const PostTags = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  font-size: 0.75em;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all, 0.5s;
`;

export const PostCard = styled.div`
  position: relative;
  display: flex;
  height: 24rem;
  width: 18rem;
  background: ${(t) => t.theme.bgSecondary};
  border: 10px solid ${(t) => t.theme.bgSecondary};
  color: white;
  border-radius: 1em;
  box-shadow: 0px 1rem 1.5rem rgba(0, 0, 0, 0.5);
  overflow: hidden;

  .post-img {
    width: 18rem;
    height: 24rem;
    opacity: 0.5;
  }
`;

export const PostContent = styled.div`
  position: absolute;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 1rem 1rem;
  bottom: 0;
  transition: all, 0.5s;
  background: rgba(0, 0, 0, 0.5);

  &:hover {
    transform: rotate(0);
    color: ${(t) => t.theme.textPrimary};
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
    background: ${(t) => t.theme.bgSecondary};
    width: 250%;
    height: 250%;
  }

  &:after {
    background: ${(t) => t.theme.bgSecondary};
    width: 200%;
    height: 200%;
  }

  &:hover:before,
  &:hover:after {
    transform: scale(1);
  }

  &:hover ${PostTags} ${Tag} {
    background: ${(t) => t.theme.accentPrimary};
    color: white;
  }
`;
