import React from 'react';

import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="h-screen bg-slate-900">
      <main className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <Icon icon="ri:skull-2-line" className=" mr-4 text-6xl text-indigo-500" />
        <h1 className="font-semibold uppercase tracking-widest text-slate-300">ReactiVite</h1>
      </main>
      <footer className="inline-flex h-16 w-full items-center justify-center text-sm text-slate-400">
        <Icon icon="logos:react" className="mr-1" />
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 decoration-slate-300 decoration-dotted hover:text-cyan-500"
        >
          React.js
        </a>
        Boilerplate by
        <a
          href="https://github.com/tfkbhr/reactivite"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 decoration-slate-300 decoration-dotted hover:text-green-500"
        >
          @tfkbhr
        </a>
        . Powered by <Icon icon="logos:vitejs" className="mx-1" />{' '}
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
          className="decoration-slate-300 decoration-dotted hover:text-yellow-500"
        >
          Vite.js
        </a>
      </footer>
    </div>
  );
}

export default App;
