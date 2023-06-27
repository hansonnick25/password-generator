// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  let availableChars = '';
  let generatedPassword = '';
  let includeLowerCase;
  let includeUpperCase;
  let includeNumeric;
  let includeSpecial;

  let length = Number(prompt('What is the length of the password?'));

  if (length <= 8 || length >= 128) {
    alert('Password should be between 8 and 128 characters.');
  } else {
    includeLowerCase = prompt(
      'Include lowercase characters? Y or N'
    ).toUpperCase();
    if (includeLowerCase == 'Y') {
      availableChars = 'abcdefghijklmnopqrstuvwxyz';
    }

    includeUpperCase = prompt(
      'Include uppercase characters? Y or N'
    ).toUpperCase();
    if (includeUpperCase == 'Y') {
      availableChars = availableChars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    includeNumeric = prompt('Include numeric characters? Y or N').toUpperCase();
    if (includeNumeric == 'Y') {
      availableChars = availableChars + '1234567890';
    }

    includeSpecial = prompt('Include special characters? Y or N').toUpperCase();
    if (includeSpecial == 'Y') {
      availableChars = availableChars + '!@#$%^&*()-_=+`~;:<>,./?';
    }

    if (
      includeLowerCase == 'N' &&
      includeUpperCase == 'N' &&
      includeNumeric == 'N' &&
      includeSpecial == 'N'
    ) {
      alert('At least one character type must be selected');
    } else {
      for (let i = 0, n = availableChars.length; i < length; i++) {
        generatedPassword += availableChars.charAt(
          Math.floor(Math.random() * n)
        );
      }
    }

    return generatedPassword;
  }

  return null;
}
