// Assignment Code


// Function that generates the user's password
function generatePassword() {

  var length = 0
  // Asks user to input how many characters they want in their password, and will alert the user and restart the function if the user's input is shorter than 8 characters, longer than 128 characters, is not a number, or is a decimal.
  while (length < 8 || length > 128 || length % 1 != 0) {
    var passLength = prompt("How many characters do you want in your password?")
    length = passLength
    // Alert if user's input is a decimal or is not a number
    if (length % 1 != 0) {
      alert("Please enter a valid, whole number for your password length.")
      length = 0;
    }
    // Alert if user's input is shorter than 8 characters
    else if (length < 8) {
      alert("Your password can't be shorter than 8 characters.")
      }
      // Alert if user's input is longer than 128 characters
    else if (length > 128) {
      alert("Your password can't be longer than 128 characters.")
      }
  }
  

// While the user's input is 8 to 128 characters, the function continues
  while (passLength >= 8 && passLength <= 128 && passLength % 1 === 0) {
    // Logs the user's password length input to the console
    console.log(passLength);

    // Defines arrays of lowercase letters, uppercase letters, numbers, and special characters
      var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
      var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      var special = ["!", "?", "#", "@", "$", "%", "&", "^", "*", "/", ".", ":", ";"]
      
      // Creates array of possible characters for the user's password
      var userChars = []
      // Creates array for the user's actual password
      var userPass = [];


      size = 0
      while (size <= 0) {
      // Asks user to confirm if they want lowercase letters in their password
      var confirmLower = confirm("Do you want lowercase letters in your password?");
      // Asks user to confirm if they want uppercase letters in their password
      var confirmUpper = confirm("Do you want uppercase letters in your password?");
      // Asks user to confirm if they want numbers in their password
      var confirmNum = confirm("Do you want numbers in your password?");
      // Asks user to confirm if they want special characters in their password
      var confirmSpecial = confirm("Do you want special characters in your password?");

      
      if (confirmLower) {
        // If user confirms they want lowercase letters, a random lowercase letter is added to userPass
        var randomLower = lowercase[Math.floor(Math.random() * lowercase.length)];
        userPass.push(randomLower);
        // Lowercase letters are pushed into userChars array
        userChars.push(...lowercase);
        }

      if (confirmUpper) {
        // If user confirms they want uppercase letters, a random uppercase letter is added to userPass
        var randomUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
        userPass.push(randomUpper);
        // Uppercase letters are pushed into userChars array
        userChars.push(...uppercase)
        }

      if (confirmNum) {
        // If user confirms they want numbers, a random number is added to userPass
        var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
        userPass.push(randomNum);
        // Numbers are pushed into userChars array
        userChars.push(...numbers)
       }
      
      if (confirmSpecial) {
        // If user confirms they want special characters, a random special character is added to userPass
        var randomSpecial = special[Math.floor(Math.random() * special.length)];
        userPass.push(randomSpecial);
        // Special characters are pushed into userChars array
        userChars.push(...special)
       }
      
      // If the user does not select any characters, they are alerted they need to select at least one character type and are brought back to the character confirmation process.
       size = userChars.length
      if (size < 1) {
        alert("You need to select at least one character type to generate a password.")
      }

      else {
        // Logs the array of possible characters for the password to the console
        console.log(userChars)
    
        // For as long as the user's password array length is less than the user's desired length, random characters are selected for the password and pushed into the userPass array
        for (var i = userPass.length ; i < passLength; i++) {
            var char = Math.floor(Math.random() * userChars.length);
            userPass.push(userChars[char]);
          }
    
        // userPass array is converted into a string
        var pwd = userPass.join('')
    
        //Function returns the final password string
        return(pwd)
    
        }
      }
    } 
  }


// Button goes to document and selects element with ID of generate from HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
