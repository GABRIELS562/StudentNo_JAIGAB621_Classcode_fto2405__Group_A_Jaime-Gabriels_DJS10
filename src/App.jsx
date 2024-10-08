import React, { useEffect, useState } from 'react';

function App() { // Define the main functional component 'App'
  const [posts, setPosts] = useState([]); // Initialize 'posts' state to store fetched blog posts, starting with an empty array
  const [error, setError] = useState(null); // Initialize 'error' state to handle errors, starting with 'null'
  const [loading, setLoading] = useState(true); // Initialize 'loading' state to track the loading status, starting with 'true'
} 
