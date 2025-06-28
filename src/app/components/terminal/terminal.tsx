import React, { useState, useRef, useEffect } from 'react';
import "./terminal.scss";

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    'Bem-vindo ao terminal! Digite "help" para ver os comandos.'
  ]);
  const [input, setInput] = useState('');
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outputRef.current?.scrollTo(0, outputRef.current.scrollHeight);
  }, [history]);

  const handleCommand = (command: string): string[] => {
    switch (command.toLowerCase()) {
      case 'help':
        return [
          'Comandos disponíveis:',
          '- about',
          '- projects',
          '- contact',
          '- clear'
        ];
      case 'about':
        return ['Sou um desenvolvedor front-end apaixonado por interfaces criativas!'];
      case 'projects':
        return ['1. Portfólio', '2. Umitrix', '3. Conversor XP'];
      case 'contact':
        return ['Email: voce@exemplo.com | LinkedIn: /seuperfil'];
      case 'clear':
        setHistory([]);
        return [];
      default:
        return [`Comando não reconhecido: "${command}"`];
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const result = handleCommand(trimmed);
    setHistory(prev => [...prev, `> ${trimmed}`, ...result]);
    setInput('');
  };

  return (
    <div className="terminal">
      <div className="terminal-output" ref={outputRef}>
        {history.map((line, index) => (
          <div key={index} className="terminal-line">{line}</div>
        ))}
      </div>
      <form className="terminal-form" onSubmit={handleSubmit}>
        <span>&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Terminal;
