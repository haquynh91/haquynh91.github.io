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
  if (typeof n == "number" && n >= 0 && n == Math.round(n)) {
    /*cach 2: if (typeof(n)=="number" && n >= 0 && n%1==0) {*/
    /*cach 3: if (Number.isInteger(n)=="true" && n >= 0) {*/
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
    default: {
      return "xin chao";
    }
  }
}

function translate2(countrycode) {
  if ((countrycode = "GE")) {
    return "haloo";
  }
  if ((countrycode = "ES")) {
    return "hola";
  }
  if ((countrycode = "IT")) {
    return "ciao";
  }
  if ((countrycode = "CZ")) {
    return "ahoj";
  }
  if ((countrycode = "PL")) {
    return "witam";
  } else return "xinchao";
}

//Bài 5. Viet ham in ra man hinh cac so tu 1 den 100, trong do: so chia het cho 3 mau cam, chia het cho 5 mau do, chia het cho ca 3 va 5 mau xanh, con lai mau den
for (let i = 1; i <= 100; i += 1) {
  if (i % 15 == 0) {
    document.write(`<h1 style="color: blue";> ${i}</h1>`);
  } else if (i % 3 == 0) {
    document.write(`<h1 style="color: orange";> ${i}</h1>`);
  } else if (i % 5 == 0) {
    document.write(`<h1 style="color: red";> ${i}</h1>`);
  } else document.write(`<h1 tyle="color: black";> ${i}</h1>`);
}
