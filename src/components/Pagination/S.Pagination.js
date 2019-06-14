import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    font-size: 0.875rem;
    margin: 0 15px;
  }
  & a {
    background-color: #dcdde1;
    padding: 08px;
    transition: color 0.2s ease;
    cursor: pointer;
    text-decoration: none;
    color: #000000;
    border-radius: 0.55rem;
    border: 1px solid transparent;
  }
  & a:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
