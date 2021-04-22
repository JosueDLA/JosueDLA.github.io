import styled from "styled-components";

export const AllPostTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 1rem 0;
  color: var(--text-tertiary);

  @media screen and (${({ theme }) => theme.media.small}) {
    font-size: 2rem;
  }

  @media screen and (${({ theme }) => theme.media.extraSmall}) {
    font-size: 1.5rem;
  }
`;

export const PostWrapper = styled.div`
  width: 100%;
`;

export const Post = styled.main`
  padding: 40px 10px 20px;
  max-width: 640px;
  position: relative;
  margin: 0 auto;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  color: var(--text-secondary);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: var(--accent-primary);
    text-decoration: none;
  }

  a.absent {
    color: #cc0000;
  }

  a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10px 0;
    padding: 0;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;
  }

  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    text-decoration: none;
  }

  h1 tt,
  h1 code {
    font-size: inherit;
  }

  h2 tt,
  h2 code {
    font-size: inherit;
  }

  h3 tt,
  h3 code {
    font-size: inherit;
  }

  h4 tt,
  h4 code {
    font-size: inherit;
  }

  h5 tt,
  h5 code {
    font-size: inherit;
  }

  h6 tt,
  h6 code {
    font-size: inherit;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  h2 {
    font-size: 32px;
    padding-bottom: 10px;
    border-bottom: 1px solid #cccccc;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    color: var(--text-secondary);
    font-size: 18px;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  li,
  table,
  pre {
    margin: 10px 0 15px;
  }

  hr {
    border: 0 none;
    color: #cccccc;
    height: 4px;
    padding: 0;
  }

  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  ul :first-child,
  ol :first-child {
    margin-top: 0;
  }

  ul :last-child,
  ol :last-child {
    margin-bottom: 0;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-size: 16px;
    font-weight: 700;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }

  dl dt:first-child {
    padding: 0;
  }

  dl dt > :first-child {
    margin-top: 0;
  }

  dl dt > :last-child {
    margin-bottom: 0;
  }

  dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }

  dl dd > :first-child {
    margin-top: 0;
  }

  dl dd > :last-child {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    padding: 0;
  }
  table tr {
    border-top: 1px solid #cccccc;
    background-color: var(--bg-primary);
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: var(--bg-primary);
  }

  table tr th {
    font-weight: 700;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto;
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0;
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
  }

  code,
  tt {
    margin: 2px;
    padding: 2px 5px;
    white-space: nowrap;
    background-color: var(--bg-tertiary);
    color: var(--accent-tertiary);
    border-radius: 3px;
  }

  pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
  }

  .highlight pre {
    background-color: var(--bg-primary);
    border: 1px solid #cccccc;
    font-size: 16px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre {
    background-color: var(--bg-primary);
    border: 1px solid #cccccc;
    font-size: 16px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre code,
  pre tt {
    background-color: transparent;
    border: none;
  }

  @media screen and (${({ theme }) => theme.media.large}) {
    img {
      max-width: 100%;
    }
  }

  @media screen and (${({ theme }) => theme.media.small}) {
    font-size: 16px;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 21px;
    }

    h4 {
      font-size: 18px;
    }

    h5 {
      font-size: 14px;
    }

    h6 {
      font-size: 12px;
    }

    code,
    pre {
      font-size: 12px;
    }
  }

  @media screen and (${({ theme }) => theme.media.extraSmall}) {
    font-size: 16px;

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 21px;
    }
    h3 {
      font-size: 18px;
    }

    h4 {
      font-size: 16px;
    }

    h5 {
      font-size: 14px;
    }

    h6 {
      font-size: 12px;
    }

    code,
    pre {
      min-width: 240px;
      max-width: 320px;
      font-size: 12px;
    }
  }
`;
