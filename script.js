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

  //First specifiy the number of characters (cast to number)
  var numberOfCharacters = window.prompt("Please enter the number of characters in the desired password (Between 8 and 128 characters)", "8");

  var invalidCharacters = "abcdefghijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()\"*+,-.\\:;<=>?@[]^_`{|}";

  var invalidCharactersArray = invalidCharacters.split('');

  var numberOfCharactersArray = numberOfCharacters.split('');

  var invalidFlag = false;

  //Check if there are any invaliud characters entered
  for (let index = 0; index < numberOfCharactersArray.length; index++) {
    const element = numberOfCharactersArray[index];
    if(invalidCharactersArray.includes(element)){
      invalidFlag = true;
    }
  }


  //Verify number of characters is between 8 and 128 and includes no invalid characters
  if( numberOfCharacters < 8 || numberOfCharacters > 128 || invalidFlag){
    window.alert("Invalid number of characters entered. Please try again.");
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

  //Instantiate character pool that can be used to generate characters for password based on selected criteria
  var characterPool = '';

  if(includeLowerCase){
    //console.log("Lower Case Characters Selected");
    //Add guaranteed password criteria
    password += lowercaseCharactersString.charAt(Math.floor(Math.random() * lowercaseCharactersString.length));
    characterPool = characterPool.concat(lowercaseCharactersString);
  }

  if(includeUpperCase){
    //console.log("Upper Case Characters Selected");
    //Add guaranteed password criteria
    password += uppercaseCharactersString.charAt(Math.floor(Math.random() * uppercaseCharactersString.length));
    characterPool = characterPool.concat(uppercaseCharactersString);
  }

  if(includeNumbers){
    //console.log("Numeric Characters Selected");
    //Add guaranteed password criteria
    password += numericCharactersString.charAt(Math.floor(Math.random() * numericCharactersString.length));
    characterPool = characterPool.concat(numericCharactersString);
  }

  if(includeSpecialCharacters){
    //console.log("Special Characters Selected");
    //Add guaranteed password criteria
    password += specialCharactersString.charAt(Math.floor(Math.random() * specialCharactersString.length));
    characterPool = characterPool.concat(specialCharactersString);
  }

  //Check character pool
  //console.log("Character Pool: " + characterPool);


  //At this point, password length is equal to the number of criteria selected (max 4)
  //Until the password is the appropriate length, add characters from the character pool defined by the selected criteria
  while(password.length<numberOfCharacters){
    password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  }

  //console.log("Password Length = " + password.length);

  return password;


}