// Ask the user for his name
let userName = prompt('Digita il tuo nome.');
// console.log(userName);//debug
// Ask the user for his surname
let userLastname = prompt('Digita il tuo Cognonome.');
// console.log(userLastname);//debug
// Ask the user for his favorite color
let userColor = prompt('Digita il tuo colore preferito');
// console.log(userColor);//debug
// Ask the user for his favorite phrase
// Create sample with default phrase
let defaultPhrase = 'Nel mezzo del cammin di nostra vita';
let defaultMatches = defaultPhrase.match(/\b(\w)/g);
let defaultAcronym = defaultMatches.join('');
let userPhrase = prompt(`Digita una frase a tua scelta. Es: ${defaultPhrase} --- otterremo: ${defaultAcronym.toLowerCase()}`);
console.log(userPhrase);//debug
//set object #xxx-pass as variable
let firstPass = document.getElementById('first-pass');
let secondPass = document.getElementById('second-pass');
let thirdPass = document.getElementById('third-pass');
let fourthPass = document.getElementById('fourth-pass');
//Add class .generated-pass
firstPass.classList.add('generated-pass');
secondPass.classList.add('generated-pass');
thirdPass.classList.add('generated-pass');
fourthPass.classList.add('generated-pass');
// Current Year in aa format
let currentYear = new Date().getFullYear();
currentYear = currentYear.toString().substr(-2);
// console.log(currentYear);//debug
// Print #first-pass userName+userSurname+userColor+currentYear 
firstPass.innerHTML = `${userName}${userLastname}${userColor}${currentYear}`;
// Variables to lower case
userName = userName.toLowerCase();
userLastname = userLastname.toLowerCase();
userColor = userColor.toLowerCase();
// console.log(`${userName}${userLastname}${userColor}${currentYear}`)//debug
// Print #second-pass userName+userSurname+userColor+currentYear 
secondPass.innerHTML = `${userName}${userLastname}${userColor}${currentYear}`;
// Print #third-pass userName+userSurname+userColor+currentYear if these variables aren't empty
(userName!='' && userName!=' ' && userLastname!='' && userLastname!=' ' && userColor!='' && userColor!=' ') 
?
thirdPass.innerHTML = `${userName}${userLastname}${userColor}${currentYear}`
:
thirdPass.innerHTML = `Devi Digitare qualcosa perchè io possa generarti una password`;
// Print #fourth-pass userPhrase Acronym
if(userPhrase!='' && userPhrase!=null && userPhrase!=' '){
    let matches = userPhrase.match(/\b(\w)/g);
    let acronym = matches.join('');
    fourthPass.innerHTML = acronym.toLowerCase();
}
else{
    fourthPass.innerHTML = 'Devi digitare una frase per ottenere la password generata.'
}
