const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const prices = document.querySelectorAll(".price");
    let total = 0;

    // Calculate sum
    prices.forEach(price => {
        total += parseFloat(price.innerText) || 0; // Convert to number
    });

    // Remove existing total row if present (so it doesn't duplicate)
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Get table and create new row for total
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    newRow.id = "totalRow"; // Assign ID for easy removal

    // Create total price cell
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.innerText = `Total Price: Rs ${total}`;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";

    newRow.appendChild(totalCell);
    table.appendChild(newRow);	
  
};

getSumBtn.addEventListener("click", getSum);

