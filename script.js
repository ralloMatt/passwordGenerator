// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //Display prompt asking for length of password
  var passwordLength = prompt("Please enter the length of the password you want to generate.\nPassword needs to be between 8 and 128 characters.");

  if(passwordLength == null){ //means user cancled on prompt
    return;
  }

  passwordLength = parseInt(passwordLength); // convert to integer (if it's not a number it returns NaN)

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { //Make sure password is between 8 and 128 characters and an acutal number
    passwordLength = prompt("Password needs to be between 8 and 128 characters!\nOr password length needs to be a number!\nPlease enter again."); //Keeps asking until input is valid
    if(passwordLength == null){ //means user cancled on prompt
      return;
    }
    passwordLength = parseInt(passwordLength); // convert to integer (if it's not a number it returns NaN)
  }

  //Utilize boolean to determine what the user wants
  var isLowerCase = confirm("Would you like lowercase letters?\nClick OK for yes. Cancel for no."); // boolean to see if lowercase
  var isUpperCase = confirm("Would you like uppercase letters?\nClick OK for yes. Cancel for no."); // boolean to see if uppercase
  var includeNumbers = confirm("Would you like to include numbers?\nClick OK for yes. Cancel for no."); // boolean to see if user wanted numbers
  var includeSpecialChars = confirm("Would you like have special characters?\nClick OK for yes. Cancel for no."); // boolean to see user wanted special characters

  if(!isLowerCase && !isUpperCase && !includeNumbers && !includeSpecialChars){ // means user didn't pick any character type
    alert("You have to pick at least one character type!\nPlease start over.");
    return;
  }

  var password = generatePassword(passwordLength, isLowerCase, isUpperCase, includeNumbers, includeSpecialChars);
  var passwordText = document.querySelector("#password"); // get password html element textarea 

  passwordText.value = password; // set that textarea value to the password
}

function generatePassword(passwordLength, isLowerCase, isUpperCase, includeNumbers, includeSpecialChars){

  var password = ""; 

  // create strings for generator
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // convert string to character arrays
  var lowerCaseArray = lowerCaseLetters.split("");
  var upperCaseArray = upperCaseLetters.split("");
  var numberArray = numbers.split("");
  var specialCharArray = specialCharacters.split("");

  // check criterias and generate password based upon these

  var randomCase = 0;  // used for making passowrd more random

  while(passwordLength > 0){ //keep running while loop until passwordLength is zero

    randomCase = Math.floor(Math.random()*4); // choose 0, 1, 2, 3 radomly
    
    if(isLowerCase && randomCase == 0){
      password += lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]; // add character to string
      passwordLength--; //decrement password length 
    }

    if(isUpperCase && randomCase == 1){
      password += upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]; // add character to string
      passwordLength--; //decrement password length 
    }

    if(includeNumbers && randomCase == 2){
      password += numberArray[Math.floor(Math.random()*numberArray.length)]; // add character to string
      passwordLength--; //decrement password length 
    }

    if(includeSpecialChars && randomCase == 3){
      password += specialCharArray[Math.floor(Math.random()*specialCharArray.length)]; // add character to string
      passwordLength--; //decrement password length 
    }
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
