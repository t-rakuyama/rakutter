import { Footer } from "../Footer"
import { Header } from "../Header"

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}) => (
  <>
    <Header />
      {children}
    <Footer />
  </>
)
