import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marck Alessandro | Web Developer',
  description: 'Portafolio profesional de Marck Alessandro Hermenegildo Pacheco - Desarrollador Web Full Stack y estudiante de Ingeniería de Sistemas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
