// Magic 8 Ball

// Event lISTENER
document.getElementById("8ballbtn").addEventListener("click", magicBtnClicked);

function magicBtnClicked() {
  console.log("hi");

  // Question input
  let question = document.getElementById("question-in").value.toLowerCase();
  console.log(question);

  if (question === "does a magic 8 ball actually work?") {
    document.getElementById(
      "ball-phrase"
    ).innerHTML = `<p class="phrase">How dare you doubt me!</p>`;
  } else if (question === "are you a real person?") {
    document.getElementById(
      "ball-phrase"
    ).innerHTML = `<p class="phrase">Probably.</p>`;
  } else if (question === "") {
    document.getElementById(
      "ball-phrase"
    ).innerHTML = `<p class="phrase">Please ask a question.</p>`;
  } else {
    let randNum = Math.random();
    if (randNum < 0.2) {
      document.getElementById(
        "ball-phrase"
      ).innerHTML = `<p class="phrase">Without a Doubt.</p>`;
    } else if (randNum < 0.4) {
      document.getElementById(
        "ball-phrase"
      ).innerHTML = `<p class="phrase">As I see it, yes.</p>`;
    } else if (randNum < 0.6) {
      document.getElementById(
        "ball-phrase"
      ).innerHTML = `<p class="phrase">Concentrate and ask again.</p>`;
    } else if (randNum < 0.8) {
      document.getElementById(
        "ball-phrase"
      ).innerHTML = `<p class="phrase">Don't count on it.</p>`;
    } else {
      document.getElementById(
        "ball-phrase"
      ).innerHTML = `<p class="phrase">Outlook not so good.</p>`;
    }
  }
}
