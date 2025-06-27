import React from 'react';

export const metadata = {
  title: 'Harison Rios - Data Engineer & Developer',
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
