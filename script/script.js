let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sumBtn = document.getElementById("sumBtn");
let sumDisplay = document.getElementById("sumDisplay");
let resetBtn = document.getElementById("resetBtn");


sumBtn.addEventListener("click", () => {
    let num1Value = Number(num1.value);
    let num2Value = Number(num2.value);

    if (!num1.value || !num2.value) {
        alert("Please enter both numbers!");
        return;
    }

    let sum = num1Value + num2Value;

    sumDisplay.style.display = "block";
    sumDisplay.textContent = "Results: " + sum; 
});


resetBtn.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    sumDisplay.style.display = "none";

})



