import {createStore} from "redux";

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const addTodo = text => {
  return {
    type : ADD_TODO, text
  }
}

const delTodo = id => {
  return{
    type : DEL_TODO, id
  }
}

const reducer = (state=[], action) => {
  switch(action.type){
    case ADD_TODO:
      const newTodo = {text:action.text, id:Date.now()}
      return[newTodo, ...state]
    case DEL_TODO:
      const cleaned =  state.filter(toDo => toDo.id !== action.id)
      return cleaned
    default:
      return state;
  }
}
const store = createStore(reducer);

store.subscribe(()=>{console.log(store.getState())})

const onSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo)
}

const dispatchAddTodo = text => {
  store.dispatch(addTodo(text))
}

const disdpatchDelTodo = e => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(delTodo(id))
}

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "Del"
    btn.addEventListener("click", disdpatchDelTodo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li)
  }
  )
}

store.subscribe(paintTodos)
form.addEventListener("submit",onSubmit)