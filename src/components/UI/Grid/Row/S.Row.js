import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => (props.center ? "justify-content: space-around" : null)};
  ${props => (props.center ? "&::after {content: ''; width: 30.5%;}" : null)}

  ${breakpoints.xxl} {
    ${props => (props.center ? "&::after {content: ''; width: 45%;}" : null)}
  }
`;
