const linksTable = document.getElementById("linksTable");
const newRow = linksTable.insertRow(-1);
const websiteCell = newRow.insertCell(0);
const linkCell = newRow.insertCell(1);
websiteCell.innerHTML = "GitHub";
linkCell.innerHTML = "<a href='https://www.github.com'>https://www.github.com</a>";