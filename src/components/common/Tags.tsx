import _ from "lodash";
import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 960px) {
    width: 100%;
  }

  .tag {
    background-color: transparent;
    border: solid 0.15rem var(--accent-primary);
    color: var(--text-primary);
    text-decoration: none;
    transition: all, 0.5s;
    border-radius: 3rem;
    padding: 0.3rem 0.8rem;
    font-size: 1rem;
    margin: 0.3rem;
    cursor: pointer;
    gap: 1rem;

    &:hover {
      background-color: var(--accent-primary);
    }
  }
`;

export interface TagsProps {
  tags: Array<object>;
  pathPrefix: string;
}

const Tags: React.FC<TagsProps> = ({ tags, pathPrefix }) => {
  return (
    <article style={{ width: "80%", padding: "2rem 0" }} className="container">
      <h3>Tags</h3>
      <TagsWrapper>
        {Object.values(tags).map((tag: any, i: number) => (
          <Link
            to={`${pathPrefix}${_.kebabCase(tag.tag.toLowerCase())}`}
            className="tag"
            key={i}
          >
            {tag.tag}, {tag.totalCount}
          </Link>
        ))}
      </TagsWrapper>
    </article>
  );
};

export default Tags;
