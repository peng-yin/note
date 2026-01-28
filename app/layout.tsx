import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Peng Yin - 个人简历',
  description: '前端工程师个人简历',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
