// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+[]{}|;:'\"<>,.?/";

function getRandomCharacter(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

function generatePassword() {
  var password = "";
  var passwordLength = parseInt(prompt("Enter the length of the password:"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return "";
  }

  var selectedChars = "";
  if (includeLowercase) selectedChars += lowercaseChars;
  if (includeUppercase) selectedChars += uppercaseChars;
  if (includeNumeric) selectedChars += numericChars;
  if (includeSpecial) selectedChars += specialChars;

  for (var i = 0; i < passwordLength; i++) {
    var randomChar = getRandomCharacter(selectedChars);
    password += randomChar;
  }
  return password;
}
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
