import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Codenix | AI Agent Setup and Automation',
  description:
    'Codenix installs and configures self-hosted AI agents for businesses. From OpenClaw to Hermes, we handle everything so your system runs 24/7 without you lifting a finger.',
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

        <Script
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
        />

        <Footer />
      </body>
    </html>
  );
}
