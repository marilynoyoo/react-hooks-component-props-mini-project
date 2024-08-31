import React from 'react';
import Article from './Article'; // Ensure this is the correct relative path

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Ideally, use a unique id if available
          title={post.title}
          content={post.content}
        />
      ))}
    </main>
  );
};

export default ArticleList;