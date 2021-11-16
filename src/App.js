import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])
  

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  // console.log(`indexOfLastPost: ${indexOfLastPost} currentPage ${currentPage}`)
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // console.log(indexOfFirstPost)
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts.length)

   
  return (
    <div className="container mt-5">
        <h1 className="text-primary mb-5">My Blog</h1>
        <Post posts = {currentPosts} loading={loading}></Post>
    </div>
  );
}

export default App;
