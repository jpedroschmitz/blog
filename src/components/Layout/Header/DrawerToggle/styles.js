import styled from 'styled-components';

export default styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  z-index: 1000;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 19px;

  .dark & span {
    background: #eee;
  }

  .dark & span:after {
    background: #eee;
  }

  .dark & span:before {
    background: #eee;
  }

  & span {
    position: relative;
    display: block;
    background: #000;
    width: 28px;
    height: 2px;
    transition: 0.5s ease-in-out;

    &:before,
    &:after {
      background: #000;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
    }

    &:before {
      top: -10px;
    }

    &:after {
      bottom: -10px;
    }

    ${({ theme }) => theme.breakpoints.sm} {
      &:before {
        top: -8px;
      }

      &:after {
        bottom: -8px;
      }
    }
  }

  &.opened span {
    transform: rotate(45deg);

    &:before {
      top: 0;
      transform: rotate(90deg);
    }

    &:after {
      transform: rotate(90deg);
      bottom: 0;
    }
  }
`;
