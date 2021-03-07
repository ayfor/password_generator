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

function generatePassword(){
  console.log("Generating Password...")

  //First specifiy the number of characters
  var numberOfCharacters = +window.prompt("Please enter the number of characters in the desired password (Between 8 and 128 characters)", "8");

  //Verify number of characters is between 8 and 128
  if( numberOfCharacters < 8 || numberOfCharacters > 128 ){
    window.alert("Invalid number of characters. Please try again.");
    return "-";
  }

  //-----Start series of prompts to determine password criteria

  var includeLowerCase;

  var includeUpperCase;

  var includeNumbers;

  var includeSpecialCharacters;


  

}