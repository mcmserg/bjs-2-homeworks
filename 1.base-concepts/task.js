"use strict";

// Функция расчёта ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = Number(percent) / 100 / 12;
  const creditBody = Number(amount) - Number(contribution);
  const months = Number(countMonths);

  if (creditBody <= 0 || months <= 0) {
    return 0;
  }

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

// ---------- Ввод данных ----------
const percent = Number(prompt("Введите процентную ставку (от 0 до 100):"));
const contribution = Number(prompt("Введите первоначальный взнос:"));
const amount = Number(prompt("Введите сумму кредита:"));
const countMonths = Number(prompt("Введите срок кредита в месяцах:"));

// ---------- Расчёт ----------
const total = calculateTotalMortgage(percent, contribution, amount, countMonths);

// ---------- Вывод на экран ----------
const message =
  "Процентная ставка: " + percent + "%\n" +
  "Первоначальный взнос: " + contribution + "\n" +
  "Сумма кредита: " + amount + "\n" +
  "Срок: " + countMonths + " мес.\n" +
  "------------------------------\n" +
  "Общая сумма выплат: " + total;


console.log(message);
