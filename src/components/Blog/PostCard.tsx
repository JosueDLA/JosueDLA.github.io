import styled from "styled-components";

export const PostCardWrapper = styled.article`
  display: grid;
  padding: 2rem 0;
  align-items: center;
  grid-auto-rows: 1fr;
  gap: 2rem;
  width: 80%;
  align-self: center;

  @media screen and (${({ theme }) => theme.media.large}) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex-basis: 40%;
  overflow: hidden;
  display: flex;

  @media screen and (${({ theme }) => theme.media.medium}) {
    flex-basis: 15rem;
    display: none;
  }

  .post-img {
    top: 0;
    right: 0;
    position: absolute;
    min-width: 100%;
    background-color: rgba(0, 0, 0, 0.5);-
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
    background: var(--bg-tertiary);
    width: 2rem;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: -1px;
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

  @media screen and (${({ theme }) => theme.media.medium}) {
    font-size: 1.5rem;
  }

  @media screen and (${({ theme }) => theme.media.extraSmall}) {
    font-size: 1.2rem;
  }
`;

export const PostDescription = styled.div`
  padding-bottom: 3rem;
  text-align: left;
`;

export const PostTags = styled.div`
  display: flex;
  align-self: center;

  .tag {
    background-color: rgba(255, 255, 255, 0.5);
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: 0.3rem;
    margin-right: 0.5em;
    line-height: 1.5em;
    font-size: 0.75rem;
    padding: 0 0.5em;
    cursor: pointer;
  }
`;

export const PostCard = styled.article`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  background-color: var(--bg-tertiary);
  line-height: 1.4rem;
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  color: var(--text-secondary);
  margin: 0 auto;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media screen and (${({ theme }) => theme.media.medium}) {
    flex-direction: column;
  }
`;
