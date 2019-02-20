import React from 'react';
import profile from '../../../static/logos/photo.png';
import classes from './PictureFrame.module.css';

const PictureFrame = () => (
  <div className={classes.Frame}>
    <img className={classes.FrameImg} alt="Perfil" title="Admire..." src={profile} />
  </div>
);

export default PictureFrame;