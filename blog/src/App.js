/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  //useState 사용법
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '맛집추천', '오늘은 여기어때?']);
  let [따봉, 따봉변경] = useState(0);


  // let title = 글제목.map((item) => {
  //   return (
  //     <h4>{item}</h4>
  //   );
  // });


  // Destructuring 문법
  let num = [1, 2, 3];
  //let [a, c, d] = [1, 2, 3];
  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Seungki - ReactBlog</h4>
      </div>
      <button onClick={() => {
        let arrSort = [...글제목];
        arrSort.sort();
        글제목변경(arrSort);
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = "여자 코트 추천";
        글제목변경(copy);
      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h4>
        <p>2월 17일 발행</p>

      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal />

    </div>
  );
}

const Modal = () => {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}


// function Modal() {
//   return (
//     <div className='modal'>
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   );
// }

export default App;
