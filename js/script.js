// Ask the user for his name
let userName = prompt('Digita il tuo nome.')
console.log(userName)
// Ask the user for his surname
let userLastname = prompt('Digita il tuo Cognonome.')
console.log(userLastname)
// Ask the user for his favorite color
let userColor = prompt('Digita il tuo colore preferito')
console.log(userColor)
//set object #generated-pass as variable
let generatedPass = document.getElementById('generated-pass');
console.log(generatedPass);
//Add class .generated-pass #generated-pass
generatedPass.classList.add('generated-pass');
// Current Year in aa format
let currentYear = new Date().getFullYear();
currentYear = currentYear.toString().substr(-2);
console.log(currentYear);
// Print userName+userSurname+userColor+currentYear 
generatedPass.innerHTML = `${userName}${userLastname}${userColor}${currentYear}`;
