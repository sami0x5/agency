import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Modern Web Development Agency | Codenix',
  description:
    'We build modern, results-driven websites for businesses that want more — more leads, more growth, and more impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
