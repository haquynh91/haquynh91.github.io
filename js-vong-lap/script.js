// Bài 1. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, ngăn cách nhau bởi ký tự “-”. Ví dụ cho chuỗi “123” thì kết quả sẽ là “123-123-123-123-123-123-123-123-123-123”.
/* cach 1*/
function printString(string) {
  let result = `${string}`;
  for (let i = 2; i <= 10; i++) {
    result += `-${string}`;
  }
  return result;
}
/* cach 2: xoa ky tu - cuoi cung*/
function printString2(string) {
  let result = ``;
  for (let i = 1; i <= 10; i++) {
    result += `${string}-`;
  }
  return result.slice(0, -1);
}

//Bài 2. Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.

function giaiThua(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
//Bài 3. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. Ví dụ cho chuỗi “hello” thì kết quả trả về sẽ là “olleh”. Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.
function convertString(string) {
  let result = ``;
  for (let i = 1; i <= string.length; i++) {
    result += string.charAt(string.length - i);
  }
  return result;
}
//Bài 6. Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.
/* cach 1: for */
for (let i = 1; i <= 100; i += 2) {
  document.write(
    `<h1 style="color: red";> ${i}</h1>`,
    `<h1 style="color: blue";> ${i + 1}</h1>`
  );
}

/* cach 2: wwhile 
let i = 1;
while (i <= 100) {
  document.write(
    `<h1 style="color: red";> ${i}</h1>`,
    `<h1 style="color: blue";> ${i + 1}</h1>`
  );
  i += 2;
}
*/
