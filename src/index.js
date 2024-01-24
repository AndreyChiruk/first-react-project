import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './css/style.css';
import AppClass from './components/App';


const app = ReactDOMClient.createRoot(document.getElementById("container"));
app.render(<AppClass />);