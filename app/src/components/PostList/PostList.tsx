import { Post } from './Post'

export type TPost = {
  userName: string
  userIcon: string
  text: string
}

const TEST: TPost[] = [
  {
    userName: '見本一郎',
    userIcon: '一',
    text: '財布おとした',
  },
  {
    userName: '見本二郎',
    userIcon: '二',
    text: '財布拾った',
  },
]

export const PostList: React.FC = () => (
  <ul>
    {TEST.map((post, index) => (
      <Post key={index} userName={post.userName} userIcon={post.userIcon} text={post.text} />
    ))}
  </ul>
)
