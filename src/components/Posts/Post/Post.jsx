import React from 'react';
import classes from './Post.module.css';

const Post = ({ children }) => (
  <div className={classes.Post}>
    {children}
  </div>
);

export default Post;