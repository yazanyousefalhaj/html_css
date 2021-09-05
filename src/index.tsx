import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { images } from "data/constants.json";


if (!localStorage.getItem("images")) {
  localStorage.setItem("images", JSON.stringify(images));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
