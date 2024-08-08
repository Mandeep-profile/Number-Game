let randomNumber = Math.floor(Math.random() * 100) + 1;

let count = 0;
let inputArray = [];
let guessNumber = document.querySelector(".guesses");
let valueStatus = document.querySelector(".lowOrHi");
let result = document.querySelector(".lastResult");
let guessOutputNumber = document.querySelector("#inputbox");

function guessSubmition() {
  // Get Number of guesses
  let value = guessOutputNumber.value.trim();
  if (value === "") {
    alert("Please enter number between 1 to 100")
    return; // Exit if input is empty
  }

  count++;
  guessNumber.innerHTML = `The Number of guesses are ${count}`;
  if (count === 10) {
    button.disabled = true;
  }

  // Store the guessed number
  inputArray.push(value);
  result.innerHTML = `Numbers: ${inputArray.join(", ")}`;
  
  // Compare values and get user status
  if (parseInt(value) === randomNumber) {
    valueStatus.innerHTML = `Successful, Value is matched !!`;
    valueStatus.style.backgroundColor = "green";
    valueStatus.style.color = "white";
    valueStatus.style.fontWeight = "600";
    valueStatus.style.padding = "5px 2px";
    button.disabled = true; 
  } else {
    valueStatus.innerHTML = `Value not matched, try again !!`;
    valueStatus.style.backgroundColor = "red";
    valueStatus.style.color = "white";
    valueStatus.style.padding = "5px 2px";
    valueStatus.style.fontWeight = "600";
  }

  guessOutputNumber.value = ""; 
  guessOutputNumber.focus();
}

function resetGame() {
  count = 0;
  inputArray = [];
  randomNumber = Math.floor(Math.random() * 100) + 1; 

  // Reset all displayed messages and results

  guessNumber.innerHTML = "";
  result.innerHTML = "";
  valueStatus.innerHTML = "";
  valueStatus.style.backgroundColor = "transparent";
  valueStatus.style.padding = "0";
  valueStatus.style.fontWeight = "normal";

  button.disabled = false; 
  restart.style.display = "inline-block"; 
  guessOutputNumber.value = "";
}

let button = document.getElementById("btn");
let restart = document.getElementById("newbtn");
button.addEventListener("click", guessSubmition);
restart.addEventListener("click", resetGame);
