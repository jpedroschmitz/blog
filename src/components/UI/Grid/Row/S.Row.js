import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => (props.center ? "justify-content: space-between" : null)};
  ${props => (props.center ? "&::after {content: ''; width: 30.5%;}" : null)}
`;
