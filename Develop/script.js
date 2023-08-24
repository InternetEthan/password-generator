// Assignment code here
var uppercaseCheck
var numberCheck
var specialCheck
var length

function setParameters() {
  uppercaseCheck = confirm("Select Ok to include uppercase letters in password");
  numberCheck = confirm("Select Ok to include numbers in password");
  specialCheck = confirm("Select Ok to include special characters in password");
  length = prompt("Enter a password length between 8 and 128");
}
function generatePassword() {
if (uppercaseCheck && numberCheck && specialCheck ===true) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'()*+,-./:;<=>?@[^_`{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (uppercaseCheck && numberCheck ===true) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (uppercaseCheck && specialCheck === true) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&'()*+,-./:;<=>?@[^_`{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (specialCheck && numberCheck ===true) {
      charset = "abcdefghijklmnopqrstuvwxyz0123456789#$%&'()*+,-./:;<=>?@[^_`{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (uppercaseCheck === true) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (numberCheck ===true) {
      charset = "abcdefghijklmnopqrstuvwxyz0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (specialCheck === true) {
      charset = "abcdefghijklmnopqrstuvwxyz#$%&'()*+,-./:;<=>?@[^_`{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else {
  length = prompt("Enter a password length between 8 and 128");
      charset = "abcdefghijklmnopqrstuvwxyz",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var parametersBtn = document.querySelector("#parameters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
parametersBtn.addEventListener("click", setParameters);
