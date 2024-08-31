import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

// App Component
const App = () => {
  const blogName = "My Awesome Blog";
  const aboutText = "Welcome to my blog where I share interesting content!";
  const blogImage = "https://via.placeholder.com/215";
  const posts = [
    {
      title: "First Post",
      date: "August 15, 2024",
      preview: "This is a preview of the first post."
    },
    {
      title: "Second Post",
      preview: "This is a preview of the second post."
    }
  ];
  return (
    <div>
      <Header name={blogName} />
      <About image={blogImage} about={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
};
export default App;