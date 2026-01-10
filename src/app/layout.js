import './globals.css'

export const metadata = {
  title: 'Check My Charity | 27Advisory CSR',
  description: 'A transparent and trusted platform connecting genuine needs with caring donors in Malaysia. Every case is verified by 27Advisory.',
  keywords: ['charity', 'donation', 'Malaysia', 'CSR', 'verified help', 'Check My Charity', 'check', 'welfare', '27Advisory'],
  authors: [{ name: '27Advisory' }],
  icons: {
    icon: 'icons/cmyc-logo.png',
    shortcut: 'icons/cmyc-logo.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}