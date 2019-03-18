import React, { Component } from "react";
import Pagination from "./Pagination";
import Post from "./Post";

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props;
    const postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        category: postEdge.node.frontmatter.category,
        description: postEdge.node.frontmatter.description,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    const { pathContext, main } = this.props;
    return (
      <React.Fragment>
        {postList.map(post => (
          <Post
            key={post.path}
            title={post.title}
            cover={post.cover}
            path={post.path}
            description={post.description}
            date={post.date}
            category={post.category}
            main={main}
          />
        ))}
        {main && (
          <Pagination
            next={pathContext.nextPagePath}
            previous={pathContext.previousPagePath}
          />
        )}
      </React.Fragment>
    );
  }
}
