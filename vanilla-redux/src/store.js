import {createStore} from "redux";
import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit";

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

// const addTodo = createAction("ADD") //Action의 이름
// const delTodo = createAction("DELETE") //Action의 이름


// const reducer = (state = [], action) => {
//   switch(action.type) {
//     //ADD와 DELETE가 이미 지워졌으므로 각 함수의 type으로 설정
//     case addTodo.type:
//       // return[{text:action.text, id:Date.now()},...state]
//       return[{text:action.payload, id:Date.now()},...state]
//     case delTodo.type:
//       // return state.filter(toDo => toDo.id !== action.payload)
//       return state.filter(toDo => toDo.id !== action.payload)
//     default:
//       return state;
//   }
// }

// const reducer = createReducer([],{
//   [addTodo] : (state, action) => {
//     state.push({text:action.payload, id:Date.now()})
//   },
//   [delTodo] : (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload)
// })

// redux toolkit은 immer아래에서 작동하기에 mutate와 새로운 state return모두 사용 가능(return값은 무조건 새로운 state)

const toDos = createSlice({
  name : 'toDosReducer',
  initialState : [],
  reducers : {
    add:(state, action) => {
      state.push({text:action.payload, id:Date.now()})},
    remove : (state, action) =>
      state.filter(toDo => toDo.id !== action.payload)
  }
})

const store = configureStore({reducer : toDos.reducer})

export const{ add, remove} = toDos.actions

export default store