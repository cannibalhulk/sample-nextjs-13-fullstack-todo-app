import './globals.css'
import Header from './Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Demo Next.js Search and Todo App</title>
      </head>
      <body>
        <Header/>
        <div  className='pl-2'>
          {children}
        </div>
      </body>
    </html>
  )
}
