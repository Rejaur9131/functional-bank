/* function doubleIt(num) {
  const result = num * 2;
  return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
console.log(first, second); */

// Handle deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // console.log("deposit button clicked");
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const newDepositTotal = parseFloat(depositAmountText);

    // get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + newDepositTotal;

    // clear input field
    depositInput.value = "";
  });
// Handle withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // Update withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdraw
    withdrawInput.value = "";
  });
