import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aidan Josias Portfolio',
  description: 'Young tech entruprenuer looking to expand in the tech industry',
  icons: [{ rel: 'icon', url: 'favicon.ico' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
