// create a random number
let random_num = Math.floor(Math.random() * 15) + 1;

// select elements
const numberInput = document.getElementById("number");
const guess_Btn = document.getElementById("btn");
const hint = document.getElementById("hint_line");
const info_1 = document.getElementById("info_1");
const info_2 = document.getElementById("info_2");
const playAgainBtn = document.getElementById("playAgainBtn");
const exitBtn = document.getElementById("ExitBtn");

let guessed_numbers = ""
let no_of_guessses = 0;


guess_Btn.addEventListener("click", () => {

    let userGuess = parseInt(numberInput.value);

    // if guess is higher than the number
    if (userGuess > random_num) {
        //display message
        hint.textContent = "Your guess is higher than the number.😲"
        // increment guessed numbers
        guessed_numbers = ""
        guessed_numbers += userGuess
        info_1.textContent += guessed_numbers + " ";
        // increment no of guesses
        no_of_guessses += 1;
        info_2.textContent = info_2.textContent.slice(0, 15);
        info_2.textContent += " " + no_of_guessses;

    }

    // if guess is lower than the number
    else if (userGuess < random_num) {
        //message
        hint.textContent = "your guess is lower than the number.😅";
        // increment guessed numbers
        guessed_numbers = ""
        guessed_numbers += userGuess
        info_1.textContent += guessed_numbers + " ";
        // increment no of guesses
        no_of_guessses += 1;
        info_2.textContent = info_2.textContent.slice(0, 15);
        info_2.textContent += " " + no_of_guessses;
    }

    // display message if user enters non-numeric value
    else if (isNaN(userGuess)) {
        hint.textContent = "🚫 please enter a valid number!"
        return;
    }

    else {
        hint.textContent = "🎉 Congratulations! You guessed the number.";

        // Display play Again btns
        document.getElementById("playAgain").style.display = "block";

        // if user selects "Yes" reset the game and generate random number
        playAgainBtn.addEventListener("click", () => {

            random_num = Math.floor(Math.random() * 15) + 1;
            numberInput.value = "";
            guessed_numbers = ""
            no_of_guessses = 0;
            info_1.textContent = "Guessed numbers: ";
            info_2.textContent = "No. of guesses: 0";
            hint.textContent = "🔮 Your hints will appear here!";

            document.getElementById("playAgain").style.display = "none";
        })


        // if user selects "No"
        exitBtn.addEventListener("click", () => {
            document.getElementById("playAgain").style.display = "none";
        })
    }
})