import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './chapter_07/Counter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MeasureExample from './chapter_07/MeasureExample';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import ConfirmButton2 from './chapter_08/ConfirmButton2';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';



ReactDOM.render(
  <React.StrictMode>
   <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
