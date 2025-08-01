// Step 1: Define the function
function checkAnswer() {
    // Step 2: Set the correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, handle it gracefully
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare and give feedback
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add event listener to the button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
