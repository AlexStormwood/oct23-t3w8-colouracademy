import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { BaseColourProvider } from './contexts/baseColourContext.js';
import { CurrentThemeProvider } from './contexts/currentThemeContext.js';
import { DarkModeProvider } from './contexts/darkModeContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <BaseColourProvider>
          <CurrentThemeProvider>
            <DarkModeProvider>
              <App />
            </DarkModeProvider>
            
          </CurrentThemeProvider>
        </BaseColourProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
