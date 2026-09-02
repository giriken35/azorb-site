import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Geist_Mono } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Azorb | フリーランスエンジニア & デザイナー',
  description:
    'Pythonによる自動化スクリプト開発、データ処理、モダンなWebフロントエンド開発など、業務効率化とシステム開発に強いエンジニア',
  keywords: [
    'Azorb',
    'フリーランス',
    'エンジニア',
    'Python',
    '自動化',
    'Next.js',
    'Web開発',
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://azorb.co',
    siteName: 'Azorb',
    title: 'Azorb | 業務効率化とモダンWeb開発のパートナー',
    description: 'Pythonによる自動化スクリプト開発、データ処理、モダンなWebフロントエンド開発を提供します。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azorb | 業務効率化とモダンWeb開発のパートナー',
    description: 'Pythonによる自動化スクリプト開発、データ処理、モダンなWebフロントエンド開発を提供します。',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f1117',
  userScalable: true,
}

import { Header } from '@/components/header'
import { Toaster } from 'sonner'
import { BackToTop } from '@/components/back-to-top'
import { RefreshNotifier } from '@/components/refresh-notifier'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className={`${notoSansJP.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="ambient-bg" aria-hidden="true" />
        <Header />
        {children}
        <BackToTop />
        <RefreshNotifier />
        <Toaster position="top-center" richColors />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
