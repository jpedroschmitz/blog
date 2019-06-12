import styled from "styled-components";

export const Post = styled.article`
  padding: 12px 40px;
  border: 0.094rem solid #C8D6E5;
  border-radius: 25px;
  ${props => (props.borderColor ? `border-color: ${props.borderColor}` : null)};
  margin-bottom: 30px;
  width: 100%;

  & a {
    display: block;
    color: #000000;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & a p {
    font-size: 0.875rem;
  }

  .dark & a {
    color: #eee;
  }
`;

export const Title = styled.h3`
  color: ${props => props.color};
`;
