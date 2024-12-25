const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const calculate = document.querySelector("#calculate");
const total = document.querySelector("#total");

function calculateTotal() {
  try {
    const billValue = parseFloat(bill.value) || 0;
    const tipValue = parseFloat(tip.value) || 0;
    if (isNaN(billValue) || isNaN(tipValue)) {
      throw new Error("0,00");
    }
    const totalValue = billValue * (1 + tipValue / 100);
    total.innerText = totalValue.toFixed(2);
  } catch (error) {
    console.error(error.message);
    total.innerText("0,00");
  }
}
calculate.addEventListener("click", calculateTotal);
