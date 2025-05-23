import React from "react";
import PostItem from "./Exercise7Parent";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem
          key={index}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}

export default PostList;
