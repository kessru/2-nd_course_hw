let password = 'пароль';
let question = prompt("Введите пароль");
if (question === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

let c = 0;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let d = 34;
let e = -555;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let a = '2';
let b = '3';
console.log(Number(a) + Number(b));

let monthNumber = prompt("Введите номер месяца");
switch (monthNumber) {
    case "1":
    case "2":
    case '12':
        console.log("Зима");
        break;
    case '3':
    case '4':
    case '5':
        console.log("Весна");
        break;
    case '6':
    case '7':
    case "8":
        console.log("Лето");
        break;
    case '9':
    case '10':
    case "11":
        console.log("Осень");
        break;
    default:
        console.log("Такого месяца нет");
        break;
}

let anyNumber = prompt("Пожалуйста, введите любое число");
console.log(!isNaN(anyNumber));
if (anyNumber % 2 === 0) {
    console.log('Четное число');
} else {
    console.log('Нечетное число');
}

let clientOS = 1 ? console.log('Установите версию приложения для Android по ссылке') : console.log('Установите версию приложения для iOS по ссылке');

let clientDeviceYear = 2016;
// Этот код не работает
// if ((clientOS === 0) && (clientDeviceYear >= 2015)) {
//     console.log('Установите версию приложения для iOS по ссылке');
// } else if ((clientOS === 0) && (clientDeviceYear < 2015)) {
//     console.log('Установите облегченную версию приложения для iOS по ссылке');
// } else if ((clientOS === 1) && (clientDeviceYear >= 2015)) {
//     console.log('Установите версию приложения для Android по ссылке');
// } else {
//     console.log('Установите облегченную версию приложения для Android по ссылке');
// }

if (clientOS === 0) {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    }
} else {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
}