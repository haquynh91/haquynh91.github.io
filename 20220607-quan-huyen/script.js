const data = [
  {
    title: `Ha Noi`,
    key: `ha-noi`,
    districts: [
      {
        key: `haibatrung`,
        title: `Hai Ba Trung`,
        wards: [
          {
            key: ``,
            title: ``,
          },
        ],
      },
    ],
  },
];

function getListDistrictOfAnyCity(cityKey) {
  let t = `<select name="huyen" id="huyen" onchange="listenHuyenChange(event)">`;
  for (let i = 0; i < data.length; i++) {
    let city = data[i];
    if (city.key == cityKey) {
      city.districts.forEach(function (element, index) {
        t += `<option value="${element.key}">${element.title}</option>`;
      });
      break;
    }
  }
  t += `<select>`;
  return t;
}
