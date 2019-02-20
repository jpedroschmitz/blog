import React from 'react';
import classes from './PostDescription.module.css';

const PostDescription = ({ description }) => (
  <p className={classes.Description}>
    {description}
  </p>
);

export default PostDescription;