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

  var password = '';

  //First specifiy the number of characters
  var numberOfCharacters = +window.prompt("Please enter the number of characters in the desired password (Between 8 and 128 characters)", "8");

  //Verify number of characters is between 8 and 128
  if( numberOfCharacters < 8 || numberOfCharacters > 128 ){
    window.alert("Invalid number of characters. Please try again.");
    return "-";
  }

  //-----Start series of prompts to determine password criteria
  // Assuming boolean return variables
  var includeLowerCase = window.confirm("Would you like to include lowercase characters in the password?");

  var includeUpperCase = window.confirm("Would you like to include upper case characters in the password?");

  var includeNumbers = window.confirm("Would you like to include numbers in the password?");

  var includeSpecialCharacters = window.confirm("Would you like to include special characters in the password?");

  // console.log("Lower Case: " +includeLowerCase);
  // console.log("Upper Case: " +includeUpperCase);
  // console.log("Include Numbers: " +includeNumbers);
  // console.log("Include Special Characters: " +includeSpecialCharacters);

  //At least one password criteria must be selected. Check is performed below:
  if(!(includeLowerCase|| includeUpperCase || includeNumbers || includeSpecialCharacters)){
    window.alert("Generation Failed. Please select at least one criteria for your password. Please try again.");
    return '-';
  }

  //Define characters that can be included in the password
  var lowercaseCharactersString = "abcdefghijlmnopqrstuvwxyz";

  var uppercaseCharactersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var numericCharactersString = "1234567890";

  var specialCharactersString = "!#$%&'()*+,-./:;<=>?@[]^_`{|}";

  //In order to generate password, must first ensure that the password fits the requirements

  var characterPool = '';

  if(includeLowerCase){
    //Add guaranteed password criteria
    password += lowercaseCharactersString.charAt(Math.floor(Math.random() * lowercaseCharactersString.length));
    console.log(password);
  }

  if(includeUpperCase){
    //Add guaranteed password criteria
    password += lowercaseCharactersString.charAt(Math.floor(Math.random() * lowercaseCharactersString.length));
    console.log(password);
  }

  if(includeNumbers){
    //Add guaranteed password criteria
    password += lowercaseCharactersString.charAt(Math.floor(Math.random() * lowercaseCharactersString.length));
    console.log(password);
  }

  if(includeSpecialCharacters){
    //Add guaranteed password criteria
    password += lowercaseCharactersString.charAt(Math.floor(Math.random() * lowercaseCharactersString.length));
    console.log(password);
  }





}