const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let ansDiv = document.getElementById("ans");
if (!ansDiv) {
    ansDiv = document.createElement("div");
    ansDiv.id = "ans";
    ansDiv.style.fontWeight = "bold";
    document.body.appendChild(ansDiv);

const getSum = () => {
//Add your code here
 const prices = document.querySelectorAll(".price");
    let total = 0;

    // Calculate sum
    prices.forEach(price => {
        total += parseFloat(price.innerText) || 0;
    });

    // Display result inside #ans
    ansDiv.innerText = `Total Price: Rs ${total}`;
};

getSumBtn.addEventListener("click", getSum);

