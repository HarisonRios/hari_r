// app/layout.tsx
import './styles/globals.scss';
import React from 'react';

export const metadata = {
  title: 'Isso é Trap - Mixtape',
  description: 'TRAP',
    icons: {
    icon: '/favicon.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
