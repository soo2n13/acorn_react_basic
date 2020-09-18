import React, { Component } from 'react';
import logo from './logo.svg';
import './css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  render() {
    const myName="lee";
    const isMan=true;
    return (
      <div className="container">
        <h1>React</h1>
        <p>내 이름은 <strong>{myName}</strong></p>
        <img src={logo} />
        <p>당신은 {isMan?"남자":"여자"} 이군요.</p>
        <p>{isMan && "당신은 남자 이군요."}</p>
        {/* 
          -이벤트 처리
          
          onEventName={화살표 함수} 처럼

          on 다음에 이벤트명을 camel case로 작성한다.
          화살표함수는 해당이벤트가 발생하면 자동으로 호출
           ex> onClick, onMouseOver, onChange, onInput, onKeyDown, onFocus ..
        */}
        <button className="btn btn-primary" onClick={()=>{
          alert("button click!");
        }}
        >click</button>
      </div>
    );
  }
}

export default App;
