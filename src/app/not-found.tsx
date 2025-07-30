import React from "react";
import Link from "next/link";
import "../styles/globals.scss"

export default function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404 - Página não encontrada</h1>
      <p>Volte para a <Link href="/">página inicial</Link>.</p>
    </main>
  );
}


// aqui fazer aquelas parada igual DVD