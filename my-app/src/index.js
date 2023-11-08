import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './chapter_07/Counter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MeasureExample from './chapter_07/MeasureExample';



ReactDOM.render(
  <React.StrictMode>
   <MeasureExample />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
