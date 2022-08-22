/* bt map - yc: diem<=5:tb, diem 5-7: kha, diem>8: gioi*/
const students = [
  { name: "a", diem: 5, xeploai: "tb" },
  { name: "b", diem: 7, xeploai: "kha" },
  { name: "c", diem: 4, xeploai: "tb" },
  { name: "d", diem: 7, xeploai: "kha" },
  { name: "e", diem: 9, xeploai: "gioi" },
];
for (let student of students) {
  document.getElementById("render").innerHTML +=
  `<tr>
    <td>${student.name}</td>
    <td>${student.diem}</td>
    <td>${student.xeploai}</td>
  </tr>`;
}
document.getElementById("btnSearch").onclick=function(){
  let condition=document.getElementById("search").value;
  let result= students.filter(o=>o.name==condition);
  let innerHTML="";
  for (let student of result) {
    innerHTML+=
    `<tr>
      <td>${student.name}</td>
      <td>${student.diem}</td>
      <td>${student.xeploai}</td>
    </tr>`;
  }
  document.getElementById("render").innerHTML=innerHTML; 
}

