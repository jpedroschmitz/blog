import styled from 'styled-components';
import breakpoints from '../../../../../styles/breakpoints';
import day from '../../../../../../static/img/icons/day.svg';
import night from '../../../../../../static/img/icons/night.svg';
import search from '../../../../../../static/img/icons/search.svg';

export default styled.button`
  ${props =>
    props.typeIcon === 'day' || props.typeIcon === 'night'
      ? 'width: 28px; height: 28px;'
      : 'width: 24px; height: 24px;'}
  cursor: pointer;
  border: none;
  outline: none;
  margin: 0 1.5rem;
  background-repeat: no-repeat;
  background-color: #000;
  mask: url('${props => (props.typeIcon === 'day' ? day : night)}');
  ${props => (props.typeIcon === 'search' ? `mask: url(${search});` : null)}
  .dark & {
    background-color: #eee;
  }

  ${breakpoints.sm} {
    width: 22px;
    height: 22px;
  }
`;
