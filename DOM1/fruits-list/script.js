const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

for (let i=0; i<fruitList.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = `${fruitList[i]}`;
  document.querySelector(".fruit-list").appendChild(li)
}
















  
