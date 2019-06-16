import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => (props.center ? "justify-content: flex-start" : null)};
`;
