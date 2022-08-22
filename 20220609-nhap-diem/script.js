let products = [
  {id:"1", price:50},
  {id:"2", price:60},
  {id:"3", price:35},
];
let sum = products.reduce(function(prev,cur){
  console.log(prev);
  console.log(cur);
  return prev+ cur.price;
},0);
console.log(sum);


/*ham find, filter, map*/
const nums=[2,5,9,19,23,40];
let firstNumUpper18=nums.find(x=>x>18);
console.log(firstNumUpper18);
let numsUpper18=nums.filter(x=>x>18);
console.log(numsUpper18);
let roots=nums.map(x=>x*2);
console.log(roots);

/* bt map - yc: diem<=5:tb, diem 5-7: kha, diem>8: gioi*/
var students=[
  {name:"a", diem:5},
  {name:"b", diem:7},
  {name:"c", diem:9},
];
let result1=students.map(o=>{
  if (o.diem>8) {
    o.xeploai="gioi"
  } else if (o.diem>5) {
    o.xeploai="kha"
  } else o.xeploai="trung binh"
  return(o);
})
console.log(result1);

/* bt filter - yc: loc ds sv co diem >6 */
let result2=students.filter(o=>o.diem>6)
console.log(result2);

/*btn.on("click", function() {
  let score = $('#score').val();
  console.log(score);
  if (score >=6 && score <= 8) {
      $('.result').html(
          `style="color: green">Gioi`
      )
  } else if (score >= 4 && score < 6) {
    $('.result').html(
          `<p style="color: yellow">Dat</p>`
      )
  } else if (score < 4) {
    $('.result').html(
          `<p style="color: red">Khong dat</p>`
      )
  }
})
*/