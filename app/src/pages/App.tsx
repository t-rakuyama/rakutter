import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { PostList } from '~/components/PostList'
import '~/assets/App.css'

function App() {
  return (
    <>
      <Header />
      <PostList />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
