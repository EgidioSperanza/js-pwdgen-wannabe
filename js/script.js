// Ask the user for his name
let userName = prompt('Digita il tuo nome.');
// console.log(userName);//debug
// Ask the user for his surname
let userLastname = prompt('Digita il tuo Cognonome.');
// console.log(userLastname);//debug
// Ask the user for his favorite color
let userColor = prompt('Digita il tuo colore preferito');
// console.log(userColor);//debug
//set object #generated-pass as variable
let generatedPass = document.getElementById('generated-pass');
// console.log(generatedPass);//debug
//Add class .generated-pass #generated-pass
generatedPass.classList.add('generated-pass');
// Current Year in aa format
let currentYear = new Date().getFullYear();
currentYear = currentYear.toString().substr(-2);
// console.log(currentYear);//debug
// Print userName+userSurname+userColor+currentYear 
generatedPass.innerHTML = `${userName}${userLastname}${userColor}${currentYear}`;
