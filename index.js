import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import ShowComponents from './components/ShowComponents'
import ErrorBoundary from './components/ErrorBoundary';

export default function Index(){


  return(
    <ErrorBoundary>
   <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/show" element={<ShowComponents/>} />
    </Routes>
   </BrowserRouter>
   </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
