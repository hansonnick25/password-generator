// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let availableChars = "";
  let generatedPassword = "";
  let includeLowerCase;
  let includeUpperCase;
  let includeNumeric;
  let includeSpecial;

  // check length
  let length = Number(prompt("What is the length of the password?"));

  if (length <= 8 || length >= 128) {
    alert("Password should be between 8 and 128 characters.");
    return;
  } else if (isNaN(length)) {
    alert("Plese enter a number");
    return;
  } else {
    // check for lowercase
    includeLowerCase = prompt(
      "Include lowercase characters? Y or N"
    ).toUpperCase();
    if (includeLowerCase == "Y") {
      availableChars = "abcdefghijklmnopqrstuvwxyz";
    } else if (includeLowerCase != "Y" && includeLowerCase != "N") {
      alert("Invalid selection, please only enter Y or N.");
      return;
    }

    // check for upper case
    includeUpperCase = prompt(
      "Include uppercase characters? Y or N"
    ).toUpperCase();
    if (includeUpperCase == "Y") {
      availableChars = availableChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (includeUpperCase != "Y" && includeUpperCase != "N") {
      alert("Invalid selection, please only enter Y or N.");
      return;
    }

    // check for numeric
    includeNumeric = prompt("Include numeric characters? Y or N").toUpperCase();
    if (includeNumeric == "Y") {
      availableChars = availableChars + "0123456789";
    } else if (includeNumeric != "Y" && includeNumeric != "N") {
      alert("Invalid selection, please only enter Y or N.");
      return;
    }

    // check for special characters
    includeSpecial = prompt("Include special characters? Y or N").toUpperCase();
    if (includeSpecial == "Y") {
      availableChars = availableChars + "!@#$%^&*()-_=+`~;:<>,./?";
    } else if (includeSpecial != "Y" && includeSpecial != "N") {
      alert("Invalid selection, please only enter Y or N.");
      return;
    }

    if (
      includeLowerCase == "N" &&
      includeUpperCase == "N" &&
      includeNumeric == "N" &&
      includeSpecial == "N"
    ) {
      alert("At least one character type must be selected");
      return;
    } else {
      for (let i = 0, n = availableChars.length; i < length; i++) {
        generatedPassword += availableChars.charAt(
          Math.floor(Math.random() * n)
        );
      }
    }

    return generatedPassword;
  }
}
