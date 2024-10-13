import React, { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]); // State for storing blog posts
  const [error, setError] = useState(null); // State for storing error messages
  const [loading, setLoading] = useState(true); // State for tracking loading

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Change this URL to test error handling
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data); // Save posts to state
        setLoading(false); // Set loading to false once data is received
      })
      .catch(err => {
        setError(err.message); // Catch and store error in state
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  // Render loading message while data is being fetched
  if (loading) { // If 'loading' is true (data is still being fetched)
    return <div>Loading...</div>; // Render a "Loading..." message on the screen
  }

  // Render error message if something goes wrong
  if (error) { // If 'error' is not null (an error occurred during the fetch)
    return <div>Error: {error}</div>; // Render the error message on the screen
  }

  // Render the posts if the fetch was successful
  return (
    <div> {/* Main container */}
      <h1>Blog Posts</h1> {/* Display the heading */}
      <ul> {/* Create an unordered list to display the blog posts */}
        {posts.map(post => ( // Loop through the 'posts' array and render each post as a list item
          <li key={post.id}> {/* Each list item requires a unique 'key', so we use the post's 'id' */}
            <h2>{post.title}</h2> {/* Display the title of the post */}
            <p>{post.body}</p> {/* Display the body/content of the post */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;