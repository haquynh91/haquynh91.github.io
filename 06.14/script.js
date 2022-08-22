const data = [
  {
    name: "An",
    score: 5,
    level: "TB",
  },
  {
    name: "Binh",
    score: 2,
    level: "TB",
  },
  {
    name: "Chi",
    score: 7,
    level: "Kha",
  },
  {
    name: "Duc",
    score: 5,
    level: "TB",
  },
  {
    name: "Giang",
    score: 9,
    level: "Gioi",
  },
  {
    name: "Hang",
    score: 8,
    level: "Gioi",
  },
];

function renderTable() {
  const tbody = document.getElementById("tbody");
  let tbodyContent = "";
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    tbodyContent += `<tr>
                      <td>${user.name}</td>
                      <td>${user.score}</td>
                      <td>${user.level}</td>
                    </tr>`;
  }
  tbody.innerHTML = tbodyContent;
}

renderTable();
