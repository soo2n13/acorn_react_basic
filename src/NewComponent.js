import React, { Component } from 'react';
/*
    부모 컴포넌트로 부터 전달된 값(properties)은
    this.props.속성명 
    형식으로 render() 메소드 안에서 참조할수 있다.
    수정은 불가하고 읽기 전용이다.
*/
class NewComponent extends Component {
    
    render() {
        return (
            <div>
             <h1>{this.props.title}</h1>
             <p>newComponent입니다.</p>
             <p>1000-{this.props.num}={1000-this.props.num}</p>
            </div>
        );
    }
}

export default NewComponent;