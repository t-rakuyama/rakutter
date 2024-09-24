import { Post } from './Post'
import { Post as TPost } from './../../types/post'

type Props = {
  posts: TPost[]
}

export const PostList: React.FC<Props> = ({posts}) => (
  <ul>
    {posts.map((post, index) => (
      <Post key={index} userName={post.postedUser.name} userIcon={post.postedUser.icon} text={post.text} />
    ))}
  </ul>
)
