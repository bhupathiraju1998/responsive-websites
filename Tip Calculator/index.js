let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

let errorElement = document.getElementById("errorMessage");

function calculate() {
    let valueOfBillAmount = billAmountElement.value;
    let valueOfPercentageTip = percentageTipElement.value;
    if (valueOfBillAmount === "") {
        errorElement.textContent = "Please Enter a Valid Input";
        tipAmountElement.value = "";
        totalAmountElement.value = "";
    } else if (valueOfPercentageTip === "") {
        errorElement.textContent = "Please Enter a Valid Input";
        tipAmountElement.value = "";
        totalAmountElement.value = "";
    } else {
        let valueOfBillAmoun = parseInt(billAmountElement.value);
        let valueOfPercentageTi = parseInt(percentageTipElement.value);
        let tipAmount = ((valueOfBillAmoun / 100) * valueOfPercentageTi);
        let totalAmount = valueOfBillAmoun + tipAmount;
        tipAmountElement.value = tipAmount;
        totalAmountElement.value = totalAmount;
        errorElement.textContent = "";

    }
}