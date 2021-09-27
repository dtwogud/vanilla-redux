import {createStore} from "redux";
import {createAction} from "@reduxjs/toolkit";

// const ADD = "ADD"
// const DELETE = "DELETE"
// const addTodo = (text) => {
//   return{
//     type : ADD,
//     text
//   }
// }

// const delTodo = id =>{
//   return{
//     type : DELETE,
//     id : parseInt(id)
//   }
// }

const addTodo = createAction("ADD") //Action의 이름
const delTodo = createAction("DELETE") //Action의 이름


const reducer = (state = [], action) => {
  switch(action.type) {
    //ADD와 DELETE가 이미 지워졌으므로 각 함수의 type으로 설정
    case addTodo.type:
      // return[{text:action.payload, id:Date.now()},...state]
      return[{text:action.payload, id:Date.now()},...state]
    case delTodo.type:
      // return state.filter(toDo => toDo.id !== action.payload)
      return state.filter(toDo => toDo.id !== action.payload)
    default:
      return state;
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addTodo,
  delTodo
}

export default store