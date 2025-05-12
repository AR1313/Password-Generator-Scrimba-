
//USING RANDOM

//let num = Math.floor(Math.random() * 12) + 1;
//will generate from 1-11 inclusive

//let num = Math.floor(Math.random() * 12);
//will generate from 0-11 inclusive

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

console.log("Script loaded and running");
// function generatedPasswordHelper(length, symbols, numbers, passwordCount) {
//     const numbersEl = document.getElementById("numbers-input").checked;
//     const symbolsEl = document.getElementById("symbols-input").checked;
//     console.log("symbols is checked: " + symbolsEl + '\n' + "numbers is checked: " + numbersEl);

//     document.getElementById("password-1").textContent = "";
//     document.getElementById("password-2").textContent = "";
//     generatePassword(length, symbols, numbers, passwordCount);
// }

function generatePassword(length, symbols, numbers, passwordCount) {

    // const numbersEl = numbers;
    // const symbolsEl = symbols;
    // console.log("symbols is checked: " + symbolsEl + '\n' + "numbers is checked: " + numbersEl);

    document.getElementById("error-p").style.display = "none";

    if (passwordCount == 0)
        return;

    if (length === "") {
        length = 15;
    }

    if (length < 3 || length > 20) {
        document.getElementById("error-p").style.display = "block";
        return;
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
        generatedPassword += pickRandomChar(symbols, numbers);
    }

    let passwordEl = document.getElementById("password-" + passwordCount);
    passwordEl.textContent = generatedPassword;

    generatePassword(length, symbols, numbers, passwordCount - 1);
}

function pickRandomChar(symbols, numbers) {
    console.log(characters.length);

    if (!symbols && !numbers) {
        let randIndex = Math.floor(Math.random() * (52)); //include only indices 0-51

        if (typeof (characters[randIndex]) != "undefined") { //safety check
            return characters[randIndex];
        }
    }

    else if (!symbols) {
        let randIndex = Math.floor(Math.random() * (62)); //include only indices 0-61

        if (typeof (characters[randIndex]) != "undefined") { //safety check
            return characters[randIndex];
        }
    }

    else if (!numbers) {
        let randIndex = Math.floor(Math.random() * (characters.length));

        while (randIndex > 51 && randIndex < 62) //exclude indices 52-61
        {
            randIndex = Math.floor(Math.random() * (characters.length));
        }

        if (typeof (characters[randIndex]) != "undefined") { //safety check
            return characters[randIndex];
        }

    }

    else {
        let randIndex = Math.floor(Math.random() * (characters.length));

        if (typeof (characters[randIndex]) != "undefined") {
            return characters[randIndex];
        }
    }
    return 'UNDEFINED'
}

function copyTextToClipboard(id) {
    console.log('Div clicked'); // Should log once per click
    document.getElementById(id).addEventListener('click', function () {
        // // Get the text from the paragraph within the div
        // const textToCopy = this.querySelector('p').textContent;

        // // Use the Clipboard API to copy the text
        // navigator.clipboard.writeText(textToCopy)
        //     .then(() => {
        //         alert('Text copied to clipboard!');
        //     })
        //     .catch(err => {
        //         console.error('Error copying text: ', err);
        //     });
        const textToCopy = this.querySelector('p').textContent;
        navigator.clipboard.writeText(textToCopy)
            .then(() => console.log('Text copied!')) // Avoid too many alerts.
            .catch(err => console.error('Error copying text: ', err));
    });

}