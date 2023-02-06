import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Home from './pages/Home';
import Propos from './pages/Propos';
import Logement from './pages/Logement';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/propos" element={<Logement />}/>
        <Route path="/logement/:id" element={<Propos />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer/> 
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
