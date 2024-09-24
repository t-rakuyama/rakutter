"use client"

import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PostList } from '../components/PostList'
import { Post } from '../types';


function App() {
  const [posts, setPosts] = useState<Post[]>([])
  console.log('hoge')
  
  useEffect(() => {
    (async() => {
      const response = await fetch('/api');
      const data = await response.json();
      setPosts(data.posts)
    })()
  }, [])

  return (
    <div className="body-root">
      <Header />
      <PostList posts={posts} />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Footer />
    </div>
  )
}

export default App
