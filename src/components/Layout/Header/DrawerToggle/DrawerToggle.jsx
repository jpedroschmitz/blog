import React from 'react';
import Toogle from './S.DrawerToggle';

export default ({ openHandler, isOpened }) => (
  <Toogle
    role="button"
    onClick={openHandler}
    className={isOpened ? 'opened' : null}
  >
    <span />
  </Toogle>
);
