import React from "react";
import { Link } from "gatsby";
import classes from "./PostMeta.module.css";

const PostMeta = ({ author, date, category, small }) => {
  let style = null;
  if (small) style = { fontSize: "1.06rem" };
  return (
    <p className={classes.Meta}>
      <span className={classes.MetaContent}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          size="18"
          height="18"
          width="18"
        >
          <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
        </svg>
        <span style={style}>
          {date.replace(
            /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{2})0Z/gm,
            "$3/$2/$1"
          )}
        </span>
      </span>
      <span className={[classes.MetaContent, classes.Author].join(" ")}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          size="18"
          height="18"
          width="18"
        >
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
        </svg>
        <Link style={style} to="/about">
          {author}
        </Link>
      </span>
      <span className={classes.MetaContent}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          size="18"
          height="18"
          width="18"
        >
          <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" />
        </svg>
        <Link style={style} to={`/categorias/${category}`}>
          {category}
        </Link>
      </span>
    </p>
  );
};

export default PostMeta;
