import { Post } from '../Post'

export const PostList = () => (
  <ul>
    {[...Array(20)].map((i) => (
      <Post key={i} />
    ))}
  </ul>
)
