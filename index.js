const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")


function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

 
function passwordGenerater(){
    getRandomCharacter()
    generateRandomPassword()
    let generatedPasswordOne = generateRandomPassword()
    let generatedPassordTwo = generateRandomPassword()
    passwordOne.textContent = generatedPasswordOne
    passwordTwo.textContent = generatedPassordTwo
}


passwordOne.addEventListener("click", function() {
    const password = passwordOne.textContent;
    copyToClipboard(password);
    document.getElementById("password-one").innerHTML = "Password Copied!";
});

passwordTwo.addEventListener("click", function() {
    const password = passwordTwo.textContent;
    copyToClipboard(password);
    document.getElementById("password-two").innerHTML = "Password Copied!";
});

function copyToClipboard(text) {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
}

/*function passwordGenerater() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
     
     for (let i = 0; i <= 14; i++) {
         let charOne = Math.floor( Math.random() * characters.length );
         let charTwo = Math.floor( Math.random() * characters.length );
         passwordOne.textContent += characters[charOne];
         passwordTwo.textContent += characters[charTwo];
     }
 }
 
 passwordOne.addEventListener("click", function() {
     const password = passwordOne.textContent;
     copyToClipboard(password);
     document.getElementById("password-one").innerHTML = "Password Copied!";
 });
 
 passwordTwo.addEventListener("click", function() {
     const password = passwordTwo.textContent;
     copyToClipboard(password);
     document.getElementById("password-two").innerHTML = "Password Copied!";
 });
 
 function copyToClipboard(text) {
     const el = document.createElement("textarea");
     el.value = text;
     document.body.appendChild(el);
     el.select();
     document.execCommand("copy");
     document.body.removeChild(el);
 } */