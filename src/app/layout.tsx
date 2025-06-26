import React from 'react';

export const metadata = {
  title: 'Isso é Trap - Mixtape',
  description: 'TRAP',
    icons: {
    icon: '/public/trap.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
