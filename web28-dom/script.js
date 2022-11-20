//1. Write a JavaScript program to calculate add, sub, mul, div of two numbers (input from user).
function getNum() {
  x = Number(document.getElementById("1stNum").value);
  y = Number(document.getElementById("2ndNum").value);
}
function add() {
  getNum();
  document.getElementById("result").innerHTML = x + y;
  document.getElementById("history").innerHTML += `<div> ${x + y} </div>`;
}
function sub() {
  getNum();
  document.getElementById("result").innerHTML = x - y;
  document.getElementById("history").innerHTML += `<div> ${x - y} </div>`;
}
function mul() {
  getNum();
  document.getElementById("result").innerHTML = x * y;
  document.getElementById("history").innerHTML += `<div> ${x * y} </div>`;
}
function div() {
  getNum();
  document.getElementById("result").innerHTML = x / y;
  document.getElementById("history").innerHTML += `<div> ${x / y} </div>`;
}

//2. Wirte a Javascript program to try text style by inputs then apply to text
function applyStyle() {
  document.getElementById("text").style.fontSize =
    document.getElementById("fontSize").value;
  document.getElementById("text").style.fontWeight =
    document.getElementById("fontWeight").value;
  document.getElementById("text").style.color =
    document.getElementById("color").value;
  document.getElementById("text").style.fontFamily =
    document.getElementById("fontFamily").value;
}
