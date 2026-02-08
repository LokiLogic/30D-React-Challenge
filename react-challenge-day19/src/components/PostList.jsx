import React from 'react';
import useFetch from '../useFetch';
import './PostList.css';

function PostList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <div className="status">Loading...</div>;
  }
    if (error) return <div className="status error">Error: {error}</div>;

  return (
    <div className='posts-container'>
            <h2>Posts</h2>
            <div className='grid'>
                {posts && posts.slice(0, 12).map((post) => (
                    <article key={post.id} className='post-card'>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </article>
                ))}
            </div>
    </div>
  )
}

export default PostList;