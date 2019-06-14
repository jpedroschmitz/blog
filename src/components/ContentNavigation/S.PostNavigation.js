import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Posts = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 55px;
  border-radius: 0.55rem;

  ${breakpoints.xl} {
    display: block;
  }
`;

export const Post = styled.div`
  width: 50%;
  height: 280px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: ${props => (props.isFullWidth ? "100%" : "50%")};

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  & p {
    margin-bottom: 20px;
    color: #fff;
  }

  & a {
    color: #eee;
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 30px;
  }

  & a h2 {
    font-weight: bold;
    color: #fff;
  }

  &:first-child {
    border-bottom-left-radius: 0.55rem;
    border-top-left-radius: 0.55rem;
  }

  &:last-child {
    border-top-right-radius: 0.55rem;
    border-bottom-right-radius: 0.55rem;
    ${props => (!props.isFullWidth ? "border-left: 1px solid #e7e7e7;" : null)};
    text-align: right;
  }

  ${breakpoints.xl} {
    width: 100%;
    margin: 10px 0;
    height: 200px;
    &:last-child, &:first-child {
      border-radius: 0.55rem;
      border: none;
    }
  }
`;
