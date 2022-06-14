import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<GifExpertApp saludo="Soy un parametro"/>);

