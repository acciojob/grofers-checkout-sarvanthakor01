const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let ans = document.getElementById("ans");
if (!ans) {
    ans = document.createElement("div");
    ans.id = "ans";
    document.body.appendChild(ans);
}
const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(price => {
        let value = parseFloat(price.innerText.trim()); 
        if (!isNaN(value)) {
            total += value;
        }
    });

    ans.innerText = `Total Price: Rs ${total}`;
};

getSumBtn.addEventListener("click", getSum);

