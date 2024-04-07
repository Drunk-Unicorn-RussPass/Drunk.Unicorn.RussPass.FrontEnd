import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={'font-suisseIntl text-sm text-natural-1'}>
        <div className={'max-w-[545px] mx-auto'}>{children}</div>
      </body>
    </html>
  );
}
