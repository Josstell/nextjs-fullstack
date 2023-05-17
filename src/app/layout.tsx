import Nav from '@/components/Nav'
import '../styles/globals.css'

export const metadat = {
  title: "Promptopia",
  description: "Discover & share AI Prompts",

}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout