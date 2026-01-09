document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiResult = document.getElementById('bmi-result');
    const bmiStatus = document.getElementById('bmi-status');

    calculateBtn.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const heightCm = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            bmiResult.textContent = '0';
            bmiStatus.textContent = 'Invalid input';
            bmiStatus.style.color = 'red';
            return;
        }

        // Convert height from centimeters to meters
        const heightMeters = heightCm / 100;
        // Calculate BMI: weight (kg) / (height (m) * height (m))
        const bmi = (weight / (heightMeters * heightMeters)).toFixed(2);

        bmiResult.textContent = bmi;
        determineBmiStatus(bmi);
    }

    function determineBmiStatus(bmi) {
        let status = '';
        let color = '';

        if (bmi < 18.5) {
            status = 'Underweight';
            color = '#FFC300';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Normal weight';
            color = '#36C12C';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'Overweight';
            color = '#FF5733';
        } else {
            status = 'Obese';
            color = '#C70039';
        }

        bmiStatus.textContent = status;
        bmiStatus.style.color = color;
    }
});
