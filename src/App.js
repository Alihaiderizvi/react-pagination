import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
   
  }, [])
  return (
    <div className="container">
       <h1>My APp</h1>
    </div>
  );
}

export default App;
