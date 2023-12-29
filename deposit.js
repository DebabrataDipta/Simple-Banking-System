document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositTotalString = depositField.value;
    const newDepositTotal = parseFloat(newDepositTotalString);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const currentDepositTotal = previousDepositAmount + newDepositTotal;
    depositTotal.innerText = currentDepositTotal;

    // Balance part 
    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotalAmount.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    console.log(previousBalanceAmount);

    const newBalanceTotalAmount = previousBalanceAmount + newDepositTotal;
    balanceTotalAmount.innerText = newBalanceTotalAmount;

    depositField.value='';
})