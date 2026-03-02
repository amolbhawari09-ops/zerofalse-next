import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'ZeroFalse | AI Code Security Platform',
  description: 'Verify AI-generated code before it reaches production. The intent firewall for AI-native development.',
  keywords: ['AI security', 'code verification', 'AI-generated code', 'security platform'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
