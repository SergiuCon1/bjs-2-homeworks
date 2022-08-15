"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    arr;
  } else if (discriminant === 0) {
    let oneRoot = -b / (2 * a);
    arr[0] = oneRoot;
  } else if (discriminant > 0) {
    let firstRoot = (-b + Math.sqrt(discriminant) )/(2 * a);
    let secondRoot = (-b - Math.sqrt(discriminant) )/(2 * a)
    arr[0] = firstRoot;
    arr[1] = secondRoot;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let currentDate = new Date();
  let interestRate = percent / 100 / 12;

  let loanBalance = amount - contribution;
  let loanTerm = date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear()));
  let amountMonth = loanBalance * (interestRate + (interestRate / (Math.pow((1 + interestRate), loanTerm) - 1)));
  totalAmount = amountMonth * loanTerm;

  return Number(totalAmount.toFixed(2));
}
