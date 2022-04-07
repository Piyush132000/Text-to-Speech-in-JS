var speech = new SpeechSynthesisUtterance();

if ("speechSynthesis" in window) {
  // Speech Synthesis supported 🎉
} else {
  // Speech Synthesis Not Supported 😣
  alert("Sorry, your browser doesn't support text to speech!");
}

function TexttoSpeech() {
  const text = document.getElementById("text").value;
  if (text.trim() != "") {
    speech.text = text;
    speech.rate = 1;
    speech.pitch = 10;
    speech.lang = "en-US";
    speechSynthesis.speak(speech);
  } else {
    alert("Please Enter Text");
  }
}

document.querySelector("button").addEventListener("click", () => {
  TexttoSpeech();
});
