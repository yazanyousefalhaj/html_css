import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener('DOMContentLoaded', async (event) => {
    const navLinks = document.querySelectorAll("#nav-menu li a");
    navLinks.forEach(e => {
        e.addEventListener("click", (e: Event) => {
            navLinks.forEach(e => e.classList.remove("active"));
            (e.target as Element).classList.toggle("active");
        });
    })

    let el = document.querySelector(`#nav-menu li a[href="${window.location.hash}"]`)
    if (el) {
        el.classList.add("active")
    } else {
        el = document.querySelector(`#nav-menu li a[href="#home"]`)
        el?.classList?.add('active')
    }
})