//Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.
function cToF(c) {
  return (c * 9) / 5 + 32;
}
//Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
function getSecondBiggestNumber(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr[1];
}

//Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.
function getMaxLength(arr) {
  lengthArr = arr.map(function (str) {
    return str.length;
  });
  maxlength = Math.max.apply(Math, lengthArr);
  for (let i = 0; i < arr.length; i++) {
    if (lengthArr[i] == maxlength) {
      return arr[i];
    }
  }
}

//Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
function checkTargetInString(str, target) {
  return str.endsWith(target);
}

//Bài 5: Cho 1 mảng các chuỗi. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).
function checkPhanTuLap(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}
