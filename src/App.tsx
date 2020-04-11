import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <p>Translation {t('Welcome to React')} </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button type="button" onClick={() => i18n.changeLanguage('es', (err, text) => console.log('success'))}>
          Change langa
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Hello</Button>
      </header>
    </div>
  );
}

export default App;
