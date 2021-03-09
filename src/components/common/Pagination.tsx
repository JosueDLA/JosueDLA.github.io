import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export interface IPaginationProps {
  isFirst: boolean;
  isLast: boolean;
}

export const PaginationWrapper = styled("div")<IPaginationProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: ${({ isFirst }) => (isFirst ? "red" : "blue")};
    pointer-events: ${({ isFirst }) => (isFirst ? "none" : "auto")};
    cursor: ${({ isFirst }) => (isFirst ? "default" : "pointer")};
  }

  a:nth-child(2) {
    color: ${({ isLast }) => (isLast ? "red" : "blue")};
    pointer-events: ${({ isLast }) => (isLast ? "none" : "auto")};
    cursor: ${({ isLast }) => (isLast ? "default" : "pointer")};
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

export interface PaginationProps {
  isFirst: boolean;
  isLast: boolean;
  previousPage: string;
  nextPage: string;
}

const Pagination: React.FC<PaginationProps> = ({
  isFirst,
  isLast,
  previousPage,
  nextPage,
}) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={previousPage}>Previous</PaginationElement>
      <PaginationElement to={nextPage}>Next</PaginationElement>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  previousPage: PropTypes.string.isRequired,
  nextPage: PropTypes.string.isRequired,
};

export default Pagination;
