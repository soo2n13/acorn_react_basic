import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
    부모 컴포넌트로 부터 전달된 값(properties)은
    this.props.속성명 
    형식으로 render() 메소드 안에서 참조할수 있다.
    수정은 불가하고 읽기 전용이다.
*/
class NewComponent extends Component {  
    //properties 의 default 값 정의하기
    //반드시 static 를 붙이고 defaultProps 에 object 를 넣어준다.
    static defaultProps={
        title:"제목입니다.",
        num:0
    };
    //properties 의 type 강제 하기
    static propTypes={
        title:PropTypes.string,
        num:PropTypes.number
    };
    //상태값 정의하기
    state={
        count:0
    };
    render() {
        return (
            <div>
             <h1>{this.props.title}</h1>
             <p>newComponent입니다.</p>
             <p>1000-{this.props.num}={1000-this.props.num}</p>
             <button className="btn btn-primary" onClick={
                 ()=>{
                     this.setState({
                        count:this.state.count+1
                     });
                 }
             }>count:{this.state.count}</button>
            </div>
        );
    }
}

export default NewComponent;