//Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ‘‘HELLO world’’ => ‘‘Hello World’’.
function capslockString(str) {
  str= str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  for (let i=1; i<str.length; i++) {
    if (str[i] === " ") {
      str= str.slice(0,i+1)+ str.charAt(i+1).toUpperCase() + str.slice(i+2);
    }
  }
  return str;
}

//Bài 2: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ‘‘Race car’’ trả về true, ‘‘hello world’’ trả về false.
function chuoiDoiXung(str) {
  str = str.split(" ").join('');
  str = str.toLowerCase();
  let revert = ``;
  for (let i = 1; i <= str.length; i++) {
    revert += str.charAt(str.length - i);
  }
 if (str == revert) {
   return true;
 } else return false;
}
//Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
function sapXepMangTheoTuoiObject(arr){
  result = arr.sort(function(a, b){return b.age - a.age})
  return result;
}
//Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ‘‘H’’ hoặc ‘‘h’’.
function filterByName(arr){
  let result = [];
  for (i=0; i<arr.length; i++){
  if (arr[i].name.charAt(0)=="h" || arr[i].name.charAt(0)=="H") {
  result.push(arr[i]);
  }
}
  return result;
}
