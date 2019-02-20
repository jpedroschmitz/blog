import React from "react";
import Post from "./Post";
import PostImage from "./Post/PostImage";
import PostTitle from "./Post/PostTitle";
import PostMeta from "./Post/PostMeta";
import PostDescription from "./Post/PostDescription";

class PostListing extends React.Component {
  getPostList() {
    const { postEdges } = this.props;
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        category: postEdge.node.frontmatter.category,
        description: postEdge.node.frontmatter.description,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <React.Fragment>
        {postList.map(post => (
          <Post key={post.path}>
            <PostImage title={post.title} cover={post.cover} path={post.path} />
            <PostTitle title={post.title} path={post.path} />
            <PostMeta
              author="João Pedro Schmitz"
              date={post.date}
              category={post.category}
              small
            />
            <PostDescription description={post.description} />
          </Post>
        ))}
      </React.Fragment>
    );
  }
}

export default PostListing;
