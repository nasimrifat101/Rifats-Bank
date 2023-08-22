document.getElementById('btn-deposit').addEventListener('click', function() {
    // Get input field and extract new deposit amount
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Get current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Calculate and update the new deposit total
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previouBalanceTotalElement = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previouBalanceTotalElement);

    // step 6

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    
    // Clear the input field
    depositField.value = '';
})
