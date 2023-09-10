import '@/styles/globals.css';
import { Manrope } from 'next/font/google';
import Heade from './Heade';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Heade title='Audiophile E-commerce Web App' icons='assets/favicon-32x32.png'/>
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
