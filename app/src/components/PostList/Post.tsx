type Props = {
  userName: string
  userIcon: string
  text: string
}

export const Post: React.FC<Props> = ({ userName, userIcon, text }) => (
  <div className="card">
    <div>{userName}</div>
    <div>{userIcon}</div>
    <div>{text}</div>
  </div>
)
