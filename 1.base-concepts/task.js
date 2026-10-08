"use strict";

function solveEquation(a, b, c) {
  const arr = [];
  const d = b * b - 4 * a * c;

  if (d < 0) return arr;

  if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }

  arr.push((-b + Math.sqrt(d)) / (2 * a));
  arr.push((-b - Math.sqrt(d)) / (2 * a));
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = Number(percent) / 100 / 12;
  const creditBody = Number(amount) - Number(contribution);
  const months = Number(countMonths);

  if (creditBody <= 0 || months <= 0) return 0;

  let total;
  if (monthlyPercent === 0) {
    total = creditBody;
  } else {
    const pow = (1 + monthlyPercent) ** months;
    const monthlyPayment =
      creditBody * (monthlyPercent + monthlyPercent / (pow - 1));
    total = monthlyPayment * months;
  }

  return Math.round(total * 100) / 100;
}