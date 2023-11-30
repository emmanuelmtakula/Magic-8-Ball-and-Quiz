// Quiz

// Event Listener
document.getElementById("btn").addEventListener("click", btnclicked);

// The Function
function btnclicked() {
  // Number of Correct Answers
  let numCorrect = 0;

  // Elements
  let correctEl = document.getElementById("correct-out");
  let percentageEl = document.getElementById("percentage-out");

  // Answer input
  let answer1 = document.getElementById("question1-in").value.toLowerCase();
  let answer2 = document.getElementById("question2-in").value.toLowerCase();
  let answer3 = document.getElementById("question3-in").value.toLowerCase();
  let answer4 = document.getElementById("question4-in").value.toLowerCase();

  // Question 1
  if (answer1 === "kanye west" || answer1 === "ye" || answer1 === "kanye") {
    document.getElementById("key").innerHTML = `<p class="result1">Correct</p>`;
    numCorrect++;
  } else {
    document.getElementById(
      "key"
    ).innerHTML = `<p class="result1">Incorrect</p>`;
  }
  // Question 2
  if (answer2 === "young thug") {
    document.getElementById(
      "key2"
    ).innerHTML = `<p class="result2">Correct</p>`;
    numCorrect++;
  } else {
    document.getElementById(
      "key2"
    ).innerHTML = `<p class="result1">Incorrect</p>`;
  }
  // Question 3
  if (answer3 === "kodak black") {
    document.getElementById(
      "key3"
    ).innerHTML = `<p class="result3">Correct</p>`;
    numCorrect++;
  } else {
    document.getElementById(
      "key3"
    ).innerHTML = `<p class="result3">Incorrect</p>`;
  }
  // Question 4
  if (answer4 === "jordan carter" || answer4 === "jordan terrell carter") {
    document.getElementById(
      "key4"
    ).innerHTML = `<p class="result4">Correct</p>`;
    numCorrect++;
  } else {
    document.getElementById(
      "key4"
    ).innerHTML = `<p class="result4">Incorrect</p>`;
  }

  // Feedback
  let percentage = (numCorrect / 4) * 100;
  correctEl.innerHTML = numCorrect;
  percentageEl.innerHTML = percentage;

  if (numCorrect <= 2) {
    document.getElementById(
      "feedback"
    ).innerHTML = `<p class="message">Better luck next time!</p>`;
  } else {
    document.getElementById(
      "feedback"
    ).innerHTML = `<p class="message">Keep up the good work!</p>`;
  }
}
