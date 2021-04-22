import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export interface IPostPaginationProps {
  isFirst: boolean;
  isLast: boolean;
}

export const PaginationWrapper = styled("div")<IPostPaginationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  gap: 1.5rem;
  flex-wrap: wrap;

  a:nth-child(1) {
    position: relative;
    color: ${({ isFirst }) =>
      isFirst ? "var(--text-disabled)" : "var(--text-tertiary)"};
    pointer-events: ${({ isFirst }) => (isFirst ? "none" : "auto")};
    display: ${({ isFirst }) => (isFirst ? "none" : "block")};
    cursor: ${({ isFirst }) => (isFirst ? "default" : "pointer")};

    &:before {
      position: absolute;
      content: "Previous";
      color: #78757a;
      top: -1.5rem;
      left: 1.5rem;
    }
  }

  a:nth-child(2) {
    position: relative;
    color: ${({ isLast }) =>
      isLast ? "var(--text-disabled)" : "var(--text-tertiary)"};
    pointer-events: ${({ isLast }) => (isLast ? "none" : "auto")};
    display: ${({ isLast }) => (isLast ? "none" : "block")};
    cursor: ${({ isLast }) => (isLast ? "default" : "pointer")};

    &:before {
      position: absolute;
      content: "Next";
      color: #78757a;
      top: -1.5rem;
      right: 1.5rem;
    }
  }

  svg {
    font-size: 1.5rem;
    vertical-align: middle;
  }
`;

export const PaginationElement = styled(Link)`
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
  font-weight: 400;
  margin: 0 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export interface PostPaginationProps {
  previous: any;
  current: any;
  next: any;
  location: { pathname: string };
}

const PostPagination: React.FC<PostPaginationProps> = ({
  previous,
  current,
  next,
  location,
}) => {
  const isFirst = previous.slug === current.slug;
  const isLast = current.slug === next.slug || previous.slug === next.slug;
  const originPath = location.pathname
    .replace(current.slug, "")
    .replace("//", "/");

  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={originPath + previous.slug}>
        <BsArrowLeftShort />
        <span>{previous.title}</span>
      </PaginationElement>
      <PaginationElement to={originPath + next.slug}>
        <span>{next.title}</span>
        <BsArrowRightShort />
      </PaginationElement>
    </PaginationWrapper>
  );
};

export default PostPagination;
