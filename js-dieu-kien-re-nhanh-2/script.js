//Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm.
function getSeason() {
  let now = new Date(); // Lấy thời gian hiện tại
  let date = now.getDate(); // Lấy ngày từ thời gian hiện tại
  let month = now.getMonth() + 1; // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
  let year = now.getFullYear(); // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại
  let season;
  if (month < 4) {
    season = "xuan";
  } else if (month < 7) {
    season = "ha";
  } else if (month < 10) {
    season = "thu";
  } else season = "dong";
  document.write(
    "Ngay " + date + " thang " + month + " nam " + year + " la mua " + season
  );
}

//Bài 2. Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).
function getStudentsList(students) {
  let studentsList = students.sort();
  for (let i = 0; i < students.length; i++) {
    document.write(`<p> STT ${i + 1} ${studentsList[i]} </p>`);
  }
}

//Bài 3. Cho 1 mảng các số. Viết function tạo ra 1 mảng mới chỉ chứa các số chẵn trong mảng truyền vào.
function getEvenArr(numArr) {
  let even = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0) {
      even.push(numArr[i]);
    }
  }
  return even;
}

//Bài 4. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số. Tham số truyền vào là 1 mảng các số. Kết quả là số nhỏ nhất trong mảng. Gợi ý: có thể dùng phương thức sort() hoặc object Math, chú ý khi sort số khác với chữ.
function getMinNumber(arr) {
  let min = Math.min.apply(Math, arr);
  return min;
}
