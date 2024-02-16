import { PostList } from '~/components/PostList'
import '~/assets/App.css'
import { Layout } from '~/components/Layout'

function App() {
  return (
    <Layout>
      <PostList />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  )
}

export default App
