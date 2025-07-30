import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';



document.querySelectorAll('[data-animate]').forEach((el) => {
  observer.observe(el);
});

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
