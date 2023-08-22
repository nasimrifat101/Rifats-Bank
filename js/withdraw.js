document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value.trim(); // Trim whitespace
    const withdrawAmount = parseFloat(withdrawAmountString);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Please enter a valid positive number for withdrawal.');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-Total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    withdrawField.value = '';

    if (withdrawAmount > previousBalanceTotal) {
        alert('Insufficient balance for withdrawal.');
        return;
    }

    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal.toFixed(2); // Keep 2 decimal places

    const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal.toFixed(2); // Keep 2 decimal places


});
