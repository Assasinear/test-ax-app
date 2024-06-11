import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 1920px;
    height: 1080px;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App />
    </React.StrictMode>
);