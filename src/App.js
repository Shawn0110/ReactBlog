import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let [title, setTitle] = useState(['Lovely cat', 'Angry kitten', 'Happy Persian cat']);
let [thumbUp, setThumbUp] = useState(0);
let [modal, setModal] = useState(false);
let [clickedTitle, setClickedTitle] = useState(0);
let [input, setInput] = useState('');

/*function 반복된UI(){

  var 어레이 = [];

  for (var i=0; i<3; i++ ){
    어레이.push(<div>안녕</div>);
  }

  return 어레이;


}*/

/*function 제목바꾸기(){
  var newArray = [...글제목];
  newArray[0] = 'Adorable cat';
  글제목변경( newArray );
}*/

     // <button onClick={ 제목바꾸기 }>Button</button>//

  let posts = 'Lovely kittens'
  return (
    <div className="App">
      <div class="black-nav">
      
        <div>Kitty House Blog</div>
      </div>

      
   
      { 
      
        title.map(function(글, i){
          return  ( <div className="list" key={i}> 
          <h3 onClick={ ()=>{ setClickedTitle(i) }}> { 글 } <span onClick={ ()=>{ setThumbUp(thumbUp  + 1) } }>👍</span> {thumbUp}</h3>
          <p>January 11th </p>
          <hr />
        </div>)
          })
      }
<div className="publish">
  <input onChange={ (e)=>{ setInput(e.target.value)}}/>
  <button onClick={ ()=>{
    var arrayCopy =  [...title];
    arrayCopy.unshift(input);
    setTitle( arrayCopy );
  }}>Save </button>
  </div>

    
      <button onClick={() => {setModal(!modal);}}>X</button>


      {
        modal === true
        ? <Modal title ={title}  clickedTitle={clickedTitle}></Modal>
        : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
        <h2>{ props.title[props.clickedTitle] }</h2>
        <p>Date</p>
        <p>Details</p>
      </div>
  )
}

 
export default App;
