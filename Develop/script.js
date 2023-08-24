// Assignment code here
var uppercaseCheck
var numberCheck
var specialCheck

function setParameters() {
  uppercaseCheck = confirm("Select Ok to include uppercase letters in password");
  numberCheck = confirm("Select Ok to include numbers in password");
  specialCheck = confirm("Select Ok to include special characters in password");
}
function generatePassword() {
if (uppercaseCheck && numberCheck && specialCheck ===true) {
  var length = prompt("Enter a password length between 8 and 128");
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'()*+,-./:;<=>?@[^_`{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (uppercaseCheck && numberCheck ===true) {
  var length = prompt("Enter a password length between 8 and 128");
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (uppercaseCheck && specialCheck === true) {
  var length = prompt("Enter a password length between 8 and 128");
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&'()*+,-./:;<=>?@[^_`{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (specialCheck && numberCheck ===true) {
  var length = prompt("Enter a password length between 8 and 128");
      charset = "abcdefghijklmnopqrstuvwxyz0123456789#$%&'()*+,-./:;<=>?@[^_`{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (uppercaseCheck === true) {
  var length = prompt("Enter a password length between 8 and 128");
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (numberCheck ===true) {
  var length = prompt("Enter a password length between 8 and 128");
      charset = "abcdefghijklmnopqrstuvwxyz0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else if (specialCheck === true) {
  var length = prompt("Enter a password length between 8 and 128");
      charset = "abcdefghijklmnopqrstuvwxyz#$%&'()*+,-./:;<=>?@[^_`{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} else {
  var length = prompt("Enter a password length between 8 and 128");
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
