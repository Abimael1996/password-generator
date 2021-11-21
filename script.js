// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var length;
var lowerCase;
var upperCase;
var numbers;
var symbols;

// Add event listener to generate button
generateBtn.addEventListener("click", function() {

    length = prompt("How long would you like your password? (please choose a minimum of 8 characters and a maximum of 128 characters)");
    if (!length) {
        return;
    }
    for (length = length; length < 8 || length > 128; alert("Please choose a minimum of 8 characters and a maximum of 128 characters"), length = prompt("How long would you like your password? (please choose a minimum of 8 characters and a maximum of 128 characters)"));  
    lowerCase = prompt("Would you like LOWERCASE characters in your password?(yes/no)");
    if (!lowerCase) {
        return;
    }
    upperCase = prompt("Would you like UPPERCASE characters in your password?(yes/no)");
    if (!upperCase) {
        return;
    }
    numbers = prompt("Would you like NUMBERS in your password?(yes/no)");
    if (!numbers) {
        return;
    }
    symbols = prompt("Would you like SYMBOL characters in your password?(yes/no)");
    if (!symbols) {
        return;
    }
    
    writePassword();
}    
);

function generatePassword() {

    var fullPassword = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]

    var randomText = "";
    for (var i = 0; i < length; i++)
    randomText += fullPassword[Math.floor(Math.random() * fullPassword.length)];

    var lowerCaseCharacter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

    var lowerCaseText = "";
    for (var i = 0; i < length; i++)
    lowerCaseText += lowerCaseCharacter[Math.floor(Math.random() * lowerCaseCharacter.length)];

    var upperCaseCharacter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var upperCaseText = "";
    for (var i = 0; i < length; i++)
    upperCaseText += upperCaseCharacter[Math.floor(Math.random() * upperCaseCharacter.length)];

    var numberCharacter = ["0","1","2","3","4","5","6","7","8","9"];

    var numberText = "";
    for (var i = 0; i < length; i++)
    numberText += numberCharacter[Math.floor(Math.random() * numberCharacter.length)];

    var symbolCharacter = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

    var symbolText = "";
    for (var i = 0; i < length; i++)
    symbolText += symbolCharacter[Math.floor(Math.random() * symbolCharacter.length)];

    var lowerUpperNumber = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
    
    var lowUpNum = "";
    for (var i = 0; i < length; i++)
    lowUpNum += lowerUpperNumber[Math.floor(Math.random() * lowerUpperNumber.length)];

    var lowerUpper = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   
    var lowUp = "";
    for (var i = 0; i < length; i++)
    lowUp += lowerUpper[Math.floor(Math.random() * lowerUpper.length)];

    var lowerSymbol = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

    var lowSym = "";
    for (var i = 0; i < length; i++)
    lowSym += lowerSymbol[Math.floor(Math.random() * lowerSymbol.length)];

    var lowerNumber = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];

    var lowNum = "";
    for (var i = 0; i < length; i++)
    lowNum += lowerNumber[Math.floor(Math.random() * lowerNumber.length)];

    var upperNumberSymbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

    var upNumSym = "";
    for (var i = 0; i < length; i++)
    upNumSym += upperNumberSymbol[Math.floor(Math.random() * upperNumberSymbol.length)];

    var upperNumber = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];

    var upNum = "";
    for (var i = 0; i < length; i++)
    upNum += upperNumber[Math.floor(Math.random() * upperNumber.length)];

    var upperSymbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

    var upSym = "";
    for (var i = 0; i < length; i++)
    upSym += upperSymbol[Math.floor(Math.random() * upperSymbol.length)];

    var numberSymbol = ["0","1","2","3","4","5","6","7","8","9"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

    var numSym = "";
    for (var i = 0; i < length; i++)
    numSym += numberSymbol[Math.floor(Math.random() * numberSymbol.length)];



    if (lowerCase === "yes" && upperCase === "yes" && numbers === "yes" && symbols === "yes") {
     return randomText;
    } else if (lowerCase === "yes" && upperCase === "no" && numbers === "no" && symbols === "no") {
        return lowerCaseText;
    } else if (upperCase == "yes" && lowerCase === "no" && numbers === "no" && symbols === "no") {
        return upperCaseText;
    } else if (numbers === "yes" && lowerCase === "no" && upperCase === "no" && symbols === "no") {
        return numberText;
    } else if (symbols === "yes" && lowerCase === "no" && upperCase === "no" && numbers === "no") {
        return symbolText;
    } else if (lowerCase === "yes" && upperCase === "yes" && numbers === "yes" && symbols === "no") {
        return lowUpNum;
    } else if (lowerCase === "yes" && upperCase === "yes" && numbers === "no" && symbols === "no") {
        return lowUp;
    } else if (lowerCase === "yes" && symbols === "yes" && numbers === "no" && upperCase === "no") {
        return lowSym;
    } else if (lowerCase === "yes" && numbers === "yes" && symbols === "no" && upperCase === "no") {
        return lowNum;
    } else if (lowerCase === "no" && numbers === "yes" && symbols === "yes" && upperCase === "yes") {
        return upNumSym;
    } else if (lowerCase === "no" && numbers === "yes" && symbols === "no" && upperCase === "yes") {
        return upNum;
    } else if (lowerCase === "no" && numbers === "no" && symbols === "yes" && upperCase === "yes") {
        return upSym;
    } else if (lowerCase === "no" && numbers === "yes" && symbols === "yes" && upperCase === "no") {
        return numSym;
    }
}
