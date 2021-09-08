import {createStore} from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// let count = 0;
// number.innerText = count;
// const updateTxt = () => {
//   number.innerText = count;

// }

// const handleAdd = () => { 
//   count += 1;
// updateTxt();
// }
// const handleMinus = () => { 
//   count -= 1;
// updateTxt();
// }

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {   //reducer 생성
  switch(action.type){
    case "ADD":
      return count += 1;
    case "MINUS":
      return count -= 1;
    default:
      return count;
  } 
}

const countStore = createStore(countModifier);   //store생성
// countStore.dispatch({type : "ADD"})
// countStore.dispatch({type : "MINUS"})
// console.log(countStore.getState());

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

add.addEventListener("click", () => {countStore.dispatch({type : ADD})})
minus.addEventListener("click", () => {countStore.dispatch({type : MINUS})})