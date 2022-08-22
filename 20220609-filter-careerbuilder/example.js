/*$.ajax({
  method: "GET",
  url: "https://628b4592667aea3a3e2b48e5.mockapi.io/product",
})
  .done(function( products ) {
    console.log(products);
  });
*/
// Tao danh sach san pham
fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product")
  .then((response) => response.json())
  .then((data) => {
    let html = ``;
    data.forEach((o) => {
      html += `
    <tr>
    <td>${o.id}</td>
    <td>${o.name}</td>
    <td>${o.description}</td>
    <td>${o.pice}</td>
    <td><button id="btnUpdate">update</button>       <button id ="btnDelete">delete</button></td>
</tr>`;
    });
    document.getElementById("render").innerHTML = html;
  });

// Lay thong tin san pham moi them
const data = {
  name: $("#name").val(),
  description: $("#description").val(),
  pice: $("#price").val()
};
 $("#btnSubmitProduct").click(function(){
   fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {console.log(data)});
})
