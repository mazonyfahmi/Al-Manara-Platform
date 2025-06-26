import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ChatWidget from '@/components/chat-widget';

export const metadata: Metadata = {
  title: 'منصة المنارة',
  description: 'منصة حديثة للتعليم عبر الإنترنت.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
        </div>
        <Toaster />
        <ChatWidget />
      </body>
    </html>
  );
}
