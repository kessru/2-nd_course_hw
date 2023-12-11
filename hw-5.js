function comparison(a, b) {
    if (a > b) {
        return result = b;
    } else {
        return result = a;
    }
}
console.log(comparison(15, 25));


let number = prompt('Введите число');
const analysis = () => number % 2 == 0 ? 'Число четное' : "Число нечетное";
// if (number % 2 == 0) {
//     return 'Число четное';
// } else {
//     return "Число нечетное";
// }
console.log(analysis());


let n = prompt('Введите число');
function clgN(n) {
    let outcome = n ** 2;
    console.log(outcome);
}
console.log(clgN(n));

function returnN(n) {
    return n ** 2;
}
console.log(returnN(n));


let userAge = prompt('Сколько вам лет?');
const age = (userAge) => {
    if (userAge >= 13) {
        return 'Добро пожаловать!';
    } else if (userAge >= 0 && userAge < 13) {
        return 'Привет, друг!';
    } else {
        return 'Вы ввели неправильное значение';
    }
}
console.log(age(userAge));


const twoNumbers = () => {
    let c = prompt('Введите число');
    let d = prompt('Введите второе число');
    if (isNaN(c) || isNaN(d)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return c * d;
    }
}
console.log(twoNumbers());


const anotherFunction = () => {
    let e = prompt('Введите число');
    if (!isNaN(e)) {
        return `${e} в кубе равняется ${e ** 3}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}

console.log(anotherFunction());


function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return Math.PI * this.radius * 2;
}

circle1 = {
    radius: 8,
    area: getArea,
    perimeter: getPerimeter,
}

circle2 = {
    radius: 4,
    area: getArea,
    perimeter: getPerimeter,
}

console.log(circle1.area());
console.log(circle2.area());
console.log(circle1.perimeter());
console.log(circle2.perimeter());