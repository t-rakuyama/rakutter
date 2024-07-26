import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PostList } from '../components/PostList'

function App() {
  return (
    <div className="body-root">
      <Header />
      <PostList />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Footer />
    </div>
  )
}

export default App
