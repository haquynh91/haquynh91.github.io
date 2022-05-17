//Bài 1. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ trả về “Pass”, nếu không hợp lệ trả về “Fail”. Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password.
function checkInfo(acc) {
  if (
    acc.username &&
    acc.username.length <= 20 &&
    acc.password.length >= 6 &&
    acc.password.length <= 32 &&
    acc.password === acc.confirm
  ) {
    return pass;
  } else return fail;
}
//Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [‘‘aba’’, ‘‘aa’’, ‘‘ad’’, ‘‘c’’, ‘‘vcd’’] thì kết quả trả về [‘‘aba’’, ‘‘vcd’’].
function getMaxLength(arr) {
  let lengthArr = [];
  for (let i = 0; i < arr.length; i++) {
    lengthArr[i] = arr[i].length;
  }
  maxlength = Math.max.apply(Math, lengthArr);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (lengthArr[i] == maxlength) {
      result.push(arr[i]);
    }
  }
  return result;
}

//Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function averageAge(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  return sum / students.length;
}
