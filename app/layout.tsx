import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Peng Yin - Frontend Engineer | Tencent',
  description: 'Frontend Engineer at Tencent CDG-AMS, specializing in AI Agent and Full-stack development. Passionate about building modern web applications with cutting-edge technologies.',
  keywords: ['Frontend Engineer', 'Web Developer', 'AI Agent', 'Full-stack', 'React', 'Next.js', 'TypeScript', 'Tencent'],
  authors: [{ name: 'Peng Yin', url: 'https://github.com/peng-yin' }],
  creator: 'Peng Yin',
  publisher: 'Peng Yin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://peng-yin.github.io/note'),
  openGraph: {
    title: 'Peng Yin - Frontend Engineer',
    description: 'Frontend Engineer at Tencent CDG-AMS, specializing in AI Agent and Full-stack development.',
    url: 'https://peng-yin.github.io/note',
    siteName: 'Peng Yin Portfolio',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peng Yin - Frontend Engineer',
    description: 'Frontend Engineer at Tencent CDG-AMS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href="https://peng-yin.github.io/note" />
      </head>
      <body>{children}</body>
    </html>
  )
}
