let p = document.querySelector(".para");
let content = p.textContent;
let words = content.split(" ");
let count=0;
for (let i=0; i<words.length; i++) {
  if (words[i].length > 8){
    count++;
    words[i] = `<mark>${words[i]}</mark>`;
  }
}
const newP =words.join(" ");
p.innerHTML = newP;
document.title = `Doan van co ${count} tu lon hon 8 ky tu`