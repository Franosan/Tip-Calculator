"use strict";

const billEl = document.querySelector(".input-bill");
const tipEl = document.querySelector(".input-tip");
const buttonEl = document.querySelector(".btn-calculate");
const totalEl = document.querySelector(".total-amount");

const state = {
  bill: "",
  tip: "",
  total: "",

  calculate() {
    this.total =
      Number(this.bill) + Number(this.bill) * (Number(this.tip) / 100);
  },

  getTotal() {
    return this.total;
  },

  setBill(value) {
    this.bill = value;
  },

  setTip(value) {
    this.tip = value;
  },
};

buttonEl.addEventListener("click", () => {
  state.calculate();
  totalEl.textContent = state.getTotal();
  totalEl.classList.remove("hidden");
});

billEl.addEventListener("input", (e) => {
  state.setBill(e.target.value);
});

tipEl.addEventListener("input", (e) => {
  state.setTip(e.target.value);
});
