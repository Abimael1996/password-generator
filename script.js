// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var lowerCase;
var upperCase;
var numbers;
var symbols;

var wrongInput = "please reply with \"yes\" or \"no\""

// Add event listener to generate button
generateBtn.addEventListener("click", function clickFunction() {

    length = prompt("How long would you like your password? (please choose a minimum of 8 characters and a maximum of 128 characters)");
    if (!length) {
        return;
    } else if (length < 8 || length > 128) {
        alert("Please choose a minimum of 8 characters and a maximum of 128 characters");
        clickFunction();
        if (!length) {
            return;
        }
    } else if (isNaN(length)) {
        alert("Please choose a NUMBER between 8 and 128");
        clickFunction();
        if (!length) {
            return;
        }
    } else {
        lowerCasePrompt();
    }
    
    function lowerCasePrompt() {
    lowerCase = prompt("Would you like LOWERCASE characters in your password?(yes/no)"); 
    if (!lowerCase) {
        return;
    }

    lowerCase = lowerCase.toUpperCase();

    if (lowerCase === "YES" || lowerCase === "NO") {
        upperCasePrompt();
    } else {
        alert(wrongInput);
        lowerCasePrompt();
        if (!lowerCase) {
            return;
        }
    }
}

    function upperCasePrompt() {
    upperCase = prompt("Would you like UPPERCASE characters in your password?(yes/no)");
    if (!upperCase) {
        return;
    }

    upperCase = upperCase.toUpperCase();
    
    if (upperCase === "YES" || upperCase === "NO") {
    numbersPrompt();  
    } else {
        alert(wrongInput);
        upperCasePrompt();
        if (!upperCase) {
            return;
        } 
    }
}
    
    function numbersPrompt() {
    numbers = prompt("Would you like NUMBERS in your password?(yes/no)");
    if (!numbers) {
        return;
    }

    numbers = numbers.toUpperCase();

    if (numbers === "YES" || numbers === "NO") {
    symbolsPrompt();
    } else {
        alert(wrongInput);
        numbersPrompt();
        if (!numbers) {
            return;
        } 
    }
}
    function symbolsPrompt() {
    symbols = prompt("Would you like SYMBOLS in your password?(yes/no)");
    if (!symbols) {
        return;
    }
    
    symbols = symbols.toUpperCase();

    if (symbols === "YES" || symbols === "NO") {
    writePassword();
    } else {
        alert(wrongInput);
        symbolsPrompt();
        if (!symbols) {
            return;
        } 
    }
}
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

    var lowerUpperSymbol = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
    
    var lowUpSym = "";
    for (var i = 0; i < length; i++)
    lowUpSym += lowerUpperSymbol[Math.floor(Math.random() * lowerUpperSymbol.length)];

    var upperNumberSymbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

    var upNumSym = "";
    for (var i = 0; i < length; i++)
    upNumSym += upperNumberSymbol[Math.floor(Math.random() * upperNumberSymbol.length)];

    var numberlowerSymbol = ["0","1","2","3","4","5","6","7","8","9"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~","a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
   
    var numLowSym = "";
    for (var i = 0; i < length; i++)
    numLowSym += numberlowerSymbol[Math.floor(Math.random() * numberlowerSymbol.length)];

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



    if (lowerCase === "YES" && upperCase === "YES" && numbers === "YES" && symbols === "YES") {
     return randomText;
    } else if (lowerCase === "YES" && upperCase === "NO" && numbers === "NO" && symbols === "NO") {
        return lowerCaseText;
    } else if (lowerCase == "NO" && upperCase === "YES" && numbers === "NO" && symbols === "NO") {
        return upperCaseText;
    } else if (lowerCase === "NO" && upperCase === "NO" && numbers === "YES" && symbols === "NO") {
        return numberText;
    } else if (lowerCase === "NO" && upperCase === "NO" && numbers === "NO" && symbols === "YES") {
        return symbolText;
    } else if (lowerCase === "YES" && upperCase === "YES" && numbers === "YES" && symbols === "NO") {
        return lowUpNum;
    } else if (lowerCase === "YES" && upperCase === "YES" && numbers === "NO" && symbols === "YES") {
        return lowUpSym;
    } else if (lowerCase === "NO" && upperCase === "YES" && numbers === "YES" && symbols === "YES") {
        return upNumSym;
    } else if (lowerCase === "YES" && upperCase === "NO" && numbers === "YES" && symbols === "YES") {
        return numLowSym;
    } else if (lowerCase === "YES" && upperCase === "YES" && numbers === "NO" && symbols === "NO") {
        return lowUp;
    } else if (lowerCase === "YES" && upperCase === "NO" && numbers === "NO" && symbols === "YES") {
        return lowSym;
    } else if (lowerCase === "YES" && upperCase === "NO" && numbers === "YES" && symbols === "NO") {
        return lowNum;
    } else if (lowerCase === "NO" && upperCase === "YES" && numbers === "YES" && symbols === "NO") {
        return upNum;
    } else if (lowerCase === "NO" && upperCase === "YES" && numbers === "NO" && symbols === "YES") {
        return upSym;
    } else if (lowerCase === "NO" && upperCase === "NO" && numbers === "YES" && symbols === "YES") {
        return numSym;
    } else {
        return " ";
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
