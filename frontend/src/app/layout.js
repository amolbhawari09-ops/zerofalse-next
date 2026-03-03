import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'ZeroFalse | AI Code Security Platform',
  description: 'Verify AI-generated code before it reaches production. The intent firewall for AI-native development.',
  keywords: ['AI security', 'code verification', 'AI-generated code', 'security platform'],
  openGraph: {
    title: 'ZeroFalse | AI Code Security Platform',
    description: 'Verify AI-generated code before it reaches production.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-navy-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}