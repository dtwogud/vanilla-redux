import React, {useState} from "react";
import {connect} from "react-redux";
import {add} from "../store"
// import {actionCreator} from "../store"
import ToDo from "../components/ToDo"

function Home({toDos,addTodo}){
  const [text, setText] = useState("")
  function onChange(e){
    setText(e.target.value)
  }

  function onSubmit(e){
    e.preventDefault();
    addTodo(text);
    setText("")
  }

  return (
  <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange}></input>
      <button>Add</button>
    </form> 
    <ul>
      {toDos.map(toDo =>(
      <ToDo {...toDo} key={toDo.id}/>
      ))}
      </ul>
  </>
  )
}

//mapStateToProps(다른이름 사용 가능은 하나 보통 mapStateToProps로 사용)
//mapStateToProps(Redux state에서 온 state, component의 props(지금은 사용X))
function mapStateToProps(state){
  // console.log(state)
  return {toDos : state}
}

function mapDispatchToProps(dispatch){
  return{
    addTodo : (text) => dispatch(add(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);