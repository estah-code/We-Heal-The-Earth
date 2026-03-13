import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';
import { ToastProvider } from '@/components/MobileToast';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'We Heal The Earth — Run for a Child\'s Future',
  description:
    'We Heal The Earth empowers communities through education, entrepreneurship, and sustainability across India.',
  keywords: ['We Heal The Earth', 'education', 'sustainability', 'non-profit', 'India'],
  openGraph: {
    title: 'We Heal The Earth — Run for a Child\'s Future',
    description:
      'Empowering communities through education, entrepreneurship, and sustainability.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans)' }}>
        <ThemeProvider>
          <ToastProvider>
            <GrainOverlay />
            <Navbar />
            <main className="page-wrapper">
              {children}
            </main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
