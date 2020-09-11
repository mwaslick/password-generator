// Assignment Code

function generatePassword() {

  var length = 0
  while (length < 8 || length > 128) {
    var passLength = prompt("How many characters do you want in your password?")
    length = passLength
    if (length < 8) {
      alert("Your password can't be shorter than 8 characters.")
      }
    else if (length > 128) {
      alert("Your password can't be longer than 128 characters.")
      }
    else if (isNaN(passLength)) {
      alert("Please enter a valid number for your password length.")
      length = 0;
    }
  }

  while (passLength >= 8 && passLength <= 128) {
    console.log(passLength);

     var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
      var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      var special = ["!", "?", "#", "@", "$", "%", "&", "^", "*", "/", ".", ":", ";"]
      
      var userChars = []


      size = 0
      while (size <= 0) {

      var confirmLower = confirm("Do you want lowercase letters in your password?");
      var confirmUpper = confirm("Do you want uppercase letters in your password?");
      var confirmNum = confirm("Do you want numbers in your password?");
      var confirmSpecial = confirm("Do you want special characters in your password?");

      if (confirmLower) {
        userChars.push(...lowercase)
        }

      if (confirmUpper) {
        userChars.push(...uppercase)
        }

      if (confirmNum) {
        userChars.push(...numbers)
       }
      
      if (confirmSpecial) {
        userChars.push(...special)
       }
      
      size = userChars.length

      if (size < 1) {
        alert("You need to select at least one character type to generate a password.")
      }

      else {
        console.log(userChars)

        var userPass = [];
    
        for (var i = 0; i < passLength; i++) {
            var char = Math.floor(Math.random() * userChars.length);
            userPass.push(userChars[char]);
          }
    
        var pwd = userPass.join('')
    
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
