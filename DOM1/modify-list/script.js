const ul=document.querySelectorAll("ul");
for (let i=0; i<ul.length; i++){
    const firstLi= ul[i].firstElementChild;
    const lastLi= ul[i].lastElementChild;
    firstLi.textContent="first";
    lastLi.textContent="last";
}











  
