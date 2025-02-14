const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let row = document.createElement('tr');
let cell = document.createElement('td');
cell.colSpan = "2";
cell.innerText = `Total Price: ${sum}`;
row.appendChild(cell);

document.querySelector('table').appendChild(row);
  
};

getSumBtn.addEventListener("click", getSum);

