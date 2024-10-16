import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Display from './text.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Display />
    <App image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxu-Ony3e5SfPfUktD9Cid-G2l8CP3SfiAA&s" header="Avatar" text="porshe" info="Profile information"/>
    <App image="https://www.boredpanda.com/blog/wp-content/uploads/2021/12/coolest-anime-characters-66-61b21d0a9cab2__700.jpg" header="Gojo" text="porshe" info="Profile information"/>
    <App image="https://www.shutterstock.com/image-vector/digital-painting-boy-anime-style-600nw-2302127233.jpg" header="Anime" text="crab" info="Profile information"/>
    <App image="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" header="Avatar" text="porshe" info="Profile information"/>

  </React.StrictMode>
);


reportWebVitals();
