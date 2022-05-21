//BAI_TAP_2
// Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.
function getCentury(year) {
  return Math.ceil(year / 100);
}

//Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu " …" ở cuối chuỗi.
function cutString(string) {
  return string.slice(0, 10) + "...";
  /*
  return string.substring(0,10)+ "...";
  return string.substr(0,10)+ "...";
  */

  function cutString2(string, number) {
    return string.slice(0, number) + "...";
  }
}

//Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa chữ cái đầu tiên.
function vietHoaChuDau(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}
/*
chartAt(): xem ký tự của chuỗi tại vị trí nào đó
*/
//Viet 1 funcion truyen vao 1 chuoi va bien thanh 1 chuoi nhu sau: "xin chao cac ban" => "xin-chao-cac-ban"
function replaceString(string) {
  return string.replace(/ /g, "-");
  return string.replaceall(" ", "-");
}

//BAI_TAP_1
//Viết 1 function thông báo lên màn hình một lời chào.
function greeting() {
  alert("Welcome to Techmaster!");
}

//Viết 1 function thông báo lên màn hình một lời chào kèm theo tên người được chào.
function greetingPerson(x) {
  alert("Hello " + x + ". Welcome to Techmaster!");
}

//Viết 1 function tính bình phương của 1 số.
function Square(x) {
  return x * x;
}

// viet function tinh tong 2 so
function sum(x, y) {
  return x + y;
}


// viet function tinh dien tich hinh tron
function circleArea(r) {
  return Math.PI * r * r;
}