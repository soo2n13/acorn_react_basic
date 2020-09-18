import React, { Component } from 'react';
import logo from './logo.svg';
import './css/bootstrap.min.css';
import './App.css';
import NewComponent from './NewComponent';

class MyComponent extends Component{
  render() {
    return (
      <p>MyComponent입니다.</p>
    )
  }
}

class App extends React.Component {
  render() {
    const myName="lee";
    const isMan=true;
    const boxStyle= {
      width:"100px",
      height:"100px",
      border:"1px solid black",
      backgroundColor:"blue" //background-color 지만, 특수문자 - 사용 불가 , 뒷문자를 대문자로 대체
    }
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
        <br/>
        <div style={boxStyle}>  
          <MyComponent title="컴포넌트1"/>
          <MyComponent title="컴포넌트2"/>
        </div>
        <NewComponent/>
        <NewComponent title="외부 컴포넌트" num={300}/>
      </div>
    );
  }
}

export default App;
