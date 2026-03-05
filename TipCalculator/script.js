"use strict";

const btnCalculate = document.querySelector(".btn-calculate");
let totalAmount = document.querySelector(".total-amount");
let inputBill = document.querySelector(".input-bill");
let inputTip = document.querySelector(".input-tip");
let bill;
let tip;

btnCalculate.addEventListener("click", calculate);

inputBill.addEventListener("input", function (e) {
  bill = e.target.value;
});

inputTip.addEventListener("input", function (e) {
  tip = e.target.value;
});

function calculate() {
  const total = Number(bill) + Number(bill) * (Number(tip) / 100);

  totalAmount.textContent = Math.round(total * 100) / 100;
  totalAmount.classList.remove("hidden");
}
