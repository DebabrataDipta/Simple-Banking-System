document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawTotalAmountString = withdrawField.value;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotal.innerText;
    const previousBalanceAmount = parseFloat(previousWithdrawAmountString);
   
    const currentWithdrawTotal = previousBalanceAmount + withdrawTotalAmount;
    withdrawTotal.innerText = currentWithdrawTotal;

    // Balance part work
    const totalBalance = document.getElementById('balance-total');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const newTotalBalance = previousTotalBalance - withdrawTotalAmount;
    totalBalance.innerText = newTotalBalance;

    withdrawField.value='';
})