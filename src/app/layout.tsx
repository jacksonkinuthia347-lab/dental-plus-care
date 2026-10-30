import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata = {
  title: 'Health Plus Care - Afya Plus',
  description: 'Quality Health Care for Everyone, Everywhere',
  manifest: '/manifest.json',
  themeColor: '#0a66ff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}