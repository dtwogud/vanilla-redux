const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;
const updateTxt = () => {
  number.innerText = count;

}

const handleAdd = () => { 
  count += 1;
updateTxt();
}
const handleMinus = () => { 
  count -= 1;
updateTxt();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);