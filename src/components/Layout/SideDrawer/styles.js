import styled from 'styled-components';

export default styled.div`
  position: fixed;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #ffffff;
  padding: 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};

  .dark & {
    background-color: #393e46;
  }

  ul {
    position: absolute;
    bottom: 20px;
    right: 0;

    li {
      padding: 05px 10px;
      margin: 0;
      margin: 10px 0;
      font-weight: bold;

      a {
        font-size: 1.6rem;
        text-align: right;
        border: none;
      }
    }
  }
`;
