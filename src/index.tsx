import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Definindo o tipo para a variável 'root' para garantir que ela seja do tipo correto
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);  // A asserção de tipo é necessária para garantir que 'root' não seja null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você quiser começar a medir a performance no seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
