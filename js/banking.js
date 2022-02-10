document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) + parseFloat(newDepositTotal);

    balanceTotal.innerText = newBalanceTotal;



    // clear input
    depositInput.value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newWithdrawAmount = previousWithdrawAmount;

    const newWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(newWithdrawAmount);

    withdrawTotal.innerText = newWithdrawTotal;


    withdrawInput.value = '';


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) - parseFloat(withdrawAmount);

    balanceTotal.innerText = newBalanceTotal;


})


