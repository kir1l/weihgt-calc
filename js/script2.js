//===============№1===================

// let k = Number(prompt());
// let age = k % 10;
// if (age >= 11 & age < 20) {
//     alert("Мне " + k + " лет");
// } else {
//     if (age <= 1) {
//         alert("Мне " + k + " год");
//     } else if (age <= 4) {
//         alert("Мне " + k + " года");
//     } else {
//         alert("Мне " + k + " лет");
//     }
// }



//===============№2==================

// let a = Number(prompt("Введите первую точку отрезка"));
// let b = Number(prompt("Введите вторую точку отрезка"));
// let x = Number(prompt("Введите число"));
// let y = Number(prompt("Введите число"));
// let z = Number(prompt("Введите число"));
// if (x > a && x < b) {
//     alert(x + " пренадлежит");
// } else {
//     alert(x + " не пренадлежит");
// }
// if (y > a && y < b) {
//     alert(y + " пренадлежит");
// } else {
//     alert(y + " не пренадлежит");
// }
// if (z > a && z < b) {
//     alert(z + " пренадлежит");
// } else {
//     alert(y + " не пренадлежит");
// }
//====================№3=================

// let number = Number(prompt("Введите число"));
// let firstNumber = Math.floor(number % 10000 / 1000);
// let secondNumber = Math.floor(number % 1000 / 100);
// let thirdNumber = Math.floor(number % 100 / 10);
// let fourthNumber = Math.floor(number % 10);
// //НЕ УВЕРЕН ЧТО ТАК ДОЛЖНО БЫТЬ
// if (firstNumber == secondNumber || firstNumber == thirdNumber || firstNumber == fourthNumber) {
//     alert('числа совпадают');
// } else if (secondNumber == thirdNumber || secondNumber == fourthNumber) {
//     alert('числа совпадают');
// } else if (thirdNumber == fourthNumber) {
//     alert('числа совпадают');
// }


// let age = prompt();
// if (age >= 14 && age <= 90) {
//     alert("находтся")
// } else {
//     alert("не находтся")
// }


// let user = prompt('введите логин');

// if (user == 'админ') {
//     let password = prompt("введите пароль");
//     if (password = "я здесь главный") {
//         alert('Здравствуйте!')
//     }
// } else if (user == "") {
//     alert('Отмененно');
// } else {
//     alert('Я вас не знаю')
// }


// for (let i = 0; i <= 100; i++) {
//     document.write(i  + "<br>");
// }

// for (let i = 0; i <= 100; i += 2) {
//     document.write(i + "<br>");
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 != 0) {
//         document.write(i  + "<br>");
//     }
// }
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// document.write(sum)

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         document.write(i + "*" + j + "=" + i * j + "<br>")
//     }
// }

// let dlina = Number(prompt('Введите длину ткани'));
// let kus;
// while (dlina > 0) {
//     kus = Number(prompt('Введите длину куска'));
//     if (kus <= dlina) {
//         dlina -= kus;
//         alert(dlina);
//     } else if (kus > dlina) {
//         alert("не хватает");
//         break
//     }
// }

// for (let i = 1000; i >= 0; i -= 7) {
//     document.write('<h3>' + i + " - 7 = " + (i - 7) + ' <h3>');
//         if (i == 993) {
//         continue
//     }
// }
// document.write('L-L-LET ME DIE');

// let i = 1000;
// while (i > 0) {
//     document.write('<h3>' + i + " - 7 = " + (i - 7) + ' <h3>');
//     i -= 7;
// }
// document.write('L-L-LET ME DIE');

// var i = 1000;
// do {
//     document.write('<h3>' + i + " - 7 = " + (i - 7) + ' <h3>');
//     i -= 7;
// } while (i > 0);
// document.write('L-L-LET ME DIE');


//================================================================================================================
// let i;
// do {
//     i = Number(prompt('Введите число > 100'));
// } while (i <= 100);
// let money = Number(prompt('cколько денег у Пети?'));
// let k = Number(prompt('сколько стоит мороженное'));
// let kol = 0;
// for (; money >= k; money -= k) {
//     kol++;
//     document.write(kol + '-ая покупка, остаток: ' + (money - k) + '<br>')
// }
// document.write(kol + ' покупок');
// let number = Number(prompt(''))
// let del = 0;
// for (i = 0; i <= number; i++) {
//     if (number % i == 0) {
//         del++
//         document.write('<br>' + i + '<br>')
//     }

// }
// if (del == 2) {
//     alert('это простое число');
// }
// let number = 0;
// let kol = 0;
// while (kol < 13) {
//     number++;
//     if (number % 10 == 7 && number % 9 == 0 && number > 100) {
//         document.write('<br>' + number + '<br>');
//         kol++;
//     }
// }

// let number = 0;
// let col = 0;
// let sum = 0;
// while (number != 9999) {
//     number = Number(prompt('введите число'));
//     if (number > 0) {
//         col++;
//         if (number != 9999) {
//             sum += number;
//         }
//     }
// }
// if (col >= 10) {
//     document.write(sum)
// } else {
//     alert('чисел меньше 10')
// }

// let i;
// do {
//     i = Number(prompt('Введите число > 100'));
// } while (i <= 100);


// let check = Number(prompt())
// for (i = 100; i < 1000; i++) {
//     if (((Math.floor((i % 1000) / 10 / 10))) + i % 10 == Math.floor(i % 100 / 10)) {
//         if (i % check == 0) {
//             document.write('<br>' + '<h4>' + i + '<h4>' + '<br>')
//         }
//     }
// }
// for (a = 1; a < 20; a++) {
//     for (b = 1; b < 20; b++) {
//         for (c = 1; c < 20; c++) {
//             if (a + b * b == c * c) {
//                 document.write(a + ' ' + b + ' ' + c + '<br>');
//             }
//         }
//     }
// }
// let a = Number(prompt('введите число'));
// let b = prompt('введите действие (+, -, *, /,)');
// let c = Number(prompt('введите  2-е число'));
// switch (b) {
//     case '+':
//         document.write(a + c);
//         break
//     case '-':
//         document.write(a - c);
//         break
//     case '*':
//         document.write(a * c);
//         break
//     case '/':
//         document.write(a / c);
//         break
// }

// let b = prompt('введите месяц');

// switch (b) {
//     case 'март':
//     case 'апрель':
//     case 'май':
//         alert('Весна');
//         break
//     case 'сентябрь':
//     case 'октябрь':
//     case 'ноябрь':
//         alert('Осень');
//         break
//     case 'июнь':
//     case 'июль':
//     case 'август':
//         alert('Лето');
//         break
//     case 'декабрь':
//     case 'январь':
//     case 'февраль':
//         alert('Зима');
//         break
// 

// let password = Number(prompt('введите пароль'));

// switch (password) {
//     case '9583':
//     case '1474':
//         alert('Доступен модуль А В С')
//         break
//     case '3331':
//     case '7922':
//         alert('Доступен модуль В С')
//         break
//     case '9455':
//     case '8997':
//         alert('Доступен модуль С')
//         break
// }

// let mark = Number(prompt('введите оценку'));
// switch (mark) {
//     case '5':
//         alert('отлично')
//         break
//     case '4':
//         alert('хорошо')
//         break
//     case '3':
//         alert('удовлетворительно')
//         break
//     case '2':
//         alert('неудовлетворительно')
//         break
//     case '1':
//         alert('плохо')
//         break
// }

// let number = Number(prompt('введите номер'));
// switch (number) {
//     case '1':
//         alert('дед');
//         break
//     case '2':
//         alert('бабка');
//         break
//     case '3':
//         alert('внучка');
//         break
//     case '4':
//         alert('жучка');
//         break
//     case '5':
//         alert('кошка');
//         break
//     case '6':
//         alert('мышка');
//         break
// }

// let number = Number(prompt('введите номер'));
// switch (number) {
//     case '1':
//         document.write('I')
//         break
//     case '2':
//         document.write('II')
//         break
//     case '3':
//         document.write('III')
//         break
//     case '4':
//         document.write('IV')
//         break
//     case '5':
//         document.write('V')
//         break
//     case '6':
//         document.write('VI')
//         break
//     case '7':
//         document.write('VII')
//         break
//     case '8':
//         document.write('VIII')
//         break
//     case '9':
//         document.write('IX')
//         break
// }

// let number = Number(prompt('введите номер'));
// switch (number) {
//     case '1':
//         document.write('one')
//         break
//     case '2':
//         document.write('two')
//         break
//     case '3':
//         document.write('three')
//         break
//     case '4':
//         document.write('four')
//         break
//     case '5':
//         document.write('five')
//         break
//     case '6':
//         document.write('six')
//         break
//     case '7':
//         document.write('seven')
//         break
//     case '8':
//         document.write('eight')
//         break
//     case '9':
//         document.write('nine')
//         break
// }
// let number = (prompt('введите элемент');
// switch (number) {
//     case 'li':
//         document.write('литий')
//         break
//     case 'be':
//         document.write('бериллий')
//         break
//     case 'b':
//         document.write('бор')
//         break
//     case 'c':
//         document.write('углерод')
//         break
//     case 'n':
//         document.write('азот')
//         break
//     case 'o':
//         document.write('кислород')
//         break
//     case 'f':
//         document.write('фтор')
//         break
//     case 'ne':
//         document.write('неон')
//         break
// }
let m = document.getElementById('inpt');
let p = 0;
let merk = document.querySelector('#merk');
merk.addEventListener('click', () => {
    mass(0.38)
});
let ven = document.querySelector('#ven');
ven.addEventListener('click', () => {
    mass(0.906)
});
let earth = document.querySelector('#earth');
earth.addEventListener('click', () => {
    mass(1)
});
let mars = document.querySelector('#mars');
mars.addEventListener('click', () => {
    mass(0.378)
});
let jupiter = document.querySelector('#jupiter');
jupiter.addEventListener('click', () => {
    mass(2.442)
});
let saturn = document.querySelector('#saturn');
saturn.addEventListener('click', () => {
    mass(1.065)
});
let uran = document.querySelector('#uran');
uran.addEventListener('click', () => {
    mass(0.903)
});
let neptun = document.querySelector('#neptun');
neptun.addEventListener('click', () => {
    mass(1.131)
});
let sun = document.querySelector('#sun');
sun.addEventListener('click', () => {
    mass(27.85)
});
let moon = document.querySelector('#moon');
moon.addEventListener('click', () => {
    mass(0.165)
});
let cerer = document.querySelector('#cerer');
cerer.addEventListener('click', () => {
    mass(0.028)
});
let pluto = document.querySelector('#pluto');
pluto.addEventListener('click', () => {
    mass(0.617)
});

function mass(g) { //p - масса , g - ускорение свободного падения
    p = m.value * g;
    n = p / 0.10197162;
    alert("Ваша масса: " + n.toFixed(3) + " Ньютонов, это " + p.toFixed(2) + " кг");

}