// Ask the user for his name
let userName = prompt('Digita il tuo nome.');
// console.log(userName);//debug
// Ask the user for his surname
let userLastname = prompt('Digita il tuo Cognonome.');
// console.log(userLastname);//debug
// Ask the user for his favorite color
let userColor = prompt('Digita il tuo colore preferito');
// console.log(userColor);//debug
//set object #xxx-pass as variable
let firstPass = document.getElementById('first-pass');
let secondPass = document.getElementById('second-pass');
let thirdPass = document.getElementById('third-pass');
//Add class .generated-pass
firstPass.classList.add('generated-pass');
secondPass.classList.add('generated-pass');
thirdPass.classList.add('generated-pass');
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
console.log(`${userName}${userLastname}${userColor}${currentYear}`)
// Print #second-pass userName+userSurname+userColor+currentYear 
secondPass.innerHTML = `${userName}${userLastname}${userColor}${currentYear}`;
// Print #third-pass userName+userSurname+userColor+currentYear if these variables aren't empty
(userName!='' && userName!=' ' && userLastname!='' && userLastname!=' ' && userColor!='' && userColor!=' ') 
?
thirdPass.innerHTML = `${userName}${userLastname}${userColor}${currentYear}`
:
thirdPass.innerHTML = `Devi Digitare qualcosa perchè io possa generarti una password`;