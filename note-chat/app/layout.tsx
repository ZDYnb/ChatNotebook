import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Note Chat',
  description: 'Chat-based learning journal scaffold'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="app-shell">
          <header className="app-header">
            <h1>Note Chat</h1>
            <p className="app-subtitle">Chat-based learning journal (MVP scaffold)</p>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
