//Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.
function timSoLonHon1(x, y) {
  if (typeof x == "number" && typeof y == "number") {
    if (x >= y) {
      return x;
    } else return y;
  } else return "Tham so khong hop le";
}

function timSoLonHon2(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    return "Tham so khong hop le";
  } else if (x >= y) {
    return x;
  } else return y;
}

//Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, sau đó tính giai thừa và in ra kết quả.
function giaiThua(n) {
  if (typeof(n)=="number" && n >= 0 && n==Math.round(n)) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  } else return "Tham so khong hop le";
}
//Bài 3. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10). Hãy chuyển điểm số sang dạng chữ với điều kiện sau: Từ 8.5 đến 10: Điểm A; Từ 7 đến dưới 8.5: Điểm B; Từ 5.5 đến dưới 7: Điểm C; Từ 4 đến dưới 5.5: Điểm D; Từ 0 đến dưới 4: Điểm F
function convertScore(x) {
  if (x < 4) {
    return "F";
  } else if (x < 5.5) {
    return "D";
  } else if (x < 7) {
    return "C";
  } else if (x < 8.5) {
    return "B";
  } else if (x <= 10) {
    return "A";
  }
}
//Bài 4. Viết hàm translate() có tác dụng dịch từ “Hello” sang 5 thứ tiếng khác nhau (tự chọn) với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.let day;
function translate(countrycode) {
  switch (countrycode) {
    case "GE": {
      return "haloo";
    }
    case "ES": {
      return "hola";
    }
    case "IT": {
      return "ciao";
    }
    case "CZ": {
      return "ahoj";
    }
    case "PL": {
      return "witam";
    }
    default:{      
      return "xin chao";
    }
  }
}
