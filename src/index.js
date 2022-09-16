import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { ResultContextProvider } from './contexts/ResultContextProvider';

import './global.css';

import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
           <Router>
               <App />
          </Router>
  </ResultContextProvider>
    
);


