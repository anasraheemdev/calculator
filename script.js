$(document).ready(function() {
    let currentInput = ''; // Holds the current number being input
    let operator = ''; // Holds the current operator
    let firstValue = ''; // Holds the first operand

    // Function to update the display
    function updateDisplay(value) {
        $('#display').val(value);
    }

    // Clear the calculator
    $('#clear').click(function() {
        currentInput = '';
        operator = '';
        firstValue = '';
        updateDisplay('');
    });

    // Handle number and decimal inputs
    $('.btn').not('#equals, #clear').click(function() {
        currentInput += $(this).val();
        updateDisplay(currentInput);
    });

    // Handle operator inputs
    $('.btn').filter(function() {
        return $(this).val() === '+' || $(this).val() === '-' || $(this).val() === '*' || $(this).val() === '/';
    }).click(function() {
        if (currentInput !== '') {
            firstValue = currentInput;
            operator = $(this).val();
            currentInput = ''; // Reset current input to start inputting the second operand
        }
    });

    // Perform calculation when equals is clicked
    $('#equals').click(function() {
        if (firstValue !== '' && currentInput !== '' && operator !== '') {
            let result;
            let secondValue = currentInput;

            // Convert to numbers and perform the operation
            switch (operator) {
                case '+':
                    result = parseFloat(firstValue) + parseFloat(secondValue);
                    break;
                case '-':
                    result = parseFloat(firstValue) - parseFloat(secondValue);
                    break;
                case '*':
                    result = parseFloat(firstValue) * parseFloat(secondValue);
                    break;
                case '/':
                    result = parseFloat(firstValue) / parseFloat(secondValue);
                    break;
            }

            // Update the display with the result
            updateDisplay(result);
            currentInput = result.toString(); // Set the current input to the result for potential further calculations
            operator = '';
            firstValue = '';
        }
    });
});
