function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    if (isNaN(income) || isNaN(deductions)) {
        alert("Please enter valid numbers for income and deductions.");
        return;
    }

    const taxableIncome = income - deductions;
    const taxRate = 0.2; // Assuming a simple flat tax rate of 20%
    const taxAmount = taxableIncome * taxRate;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your calculated tax is: ₹${taxAmount.toFixed(2)}`;
}
