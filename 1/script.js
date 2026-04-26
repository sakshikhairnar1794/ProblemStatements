function filtertable() {
  let input = document.getElementById("searchinput").value.toLowerCase();
  let rows = document.querySelectorAll("#tagtable tbody tr");

  rows.forEach(row => {
    let text = row.innerText.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
}