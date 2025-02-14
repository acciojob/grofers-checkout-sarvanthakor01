const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.innerText) || 0;
    });

    let table = document.querySelector("table");
    let newRow = document.createElement("tr");
    let totalCell = document.createElement("td");

    totalCell.colSpan = 2;
    totalCell.innerText = `Total Price: $${total.toFixed(2)}`;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

