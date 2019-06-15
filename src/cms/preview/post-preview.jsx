import React from "react";
import moment from "moment";
import Content from "../../components/Content";
import ContentInfo from "../../components/ContentInfo";

export default ({ widgetFor }) => (
  <>
    <ContentInfo
      timeToRead="1"
      title={widgetFor("body")}
      date={moment(widgetFor("body"), "YYYYMMDD").fromNow()}
      category={widgetFor("category")}
      color="#000"
      image={widgetFor("image")}
      tags={widgetFor("tags")}
    />
    <Content html={widgetFor("body")} />
  </>
);
