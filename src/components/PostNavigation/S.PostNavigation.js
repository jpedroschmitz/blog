import styled from "styled-components";

export const Posts = styled.div`
  width: 100%;
  display: flex;
  height: 280px;
  padding-bottom: 55px;
  border-radius: 0.55rem;
`;

export const Post = styled.div`
  width: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('${props => props.url}');
  height: 100%;
  padding: 30px;
  width: ${props => (props.isFullWidth ? "100%" : "50%")};

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
`;
