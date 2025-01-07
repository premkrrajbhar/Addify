let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sumBtn = document.getElementById("sumBtn");
let sumDisplay = document.getElementById("sumDisplay");
let resetBtn = document.getElementById("resetBtn");
let popupBox = document.getElementById("popupBox")
let closePopupBtn = document.getElementById("closePopupBtn");


sumBtn.addEventListener("click", () => {
    let num1Value = Number(num1.value);
    let num2Value = Number(num2.value);

    if (!num1.value || !num2.value) {
        popupBox.style.display = "flex";
        return;
    }

    let sum = num1Value + num2Value;

    sumDisplay.style.display = "block";
    sumDisplay.textContent = "Results: " + sum;
});

closePopupBtn.addEventListener("click", () => {
    popupBox.style.display = "none";
})

resetBtn.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    sumDisplay.style.display = "none";

})



