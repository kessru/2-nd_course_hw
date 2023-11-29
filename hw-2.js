let a1 = 20;
alert(a1);

const iphone1Year = 2007;
alert(iphone1Year);

const JSCreator = 'Брендан Эйх';
alert(`Имя создателя языка JavaScript - ${JSCreator}`);

let big = 10;
let small = 2;
let resultSum = big + small;
let resultExtract = big - small;
let resultMultip = big * small;
let resultDivis = big / small;
alert(`${resultSum}, ${resultExtract}, ${resultMultip}, ${resultDivis}`);

let result = 2 ** 5;
alert(result);

let a = 9;
let b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

const user = {
    name: 'Lisa',
    age: 33,
    work: 'engineer',
    isAdmin: false,

};
user['city of residence'] = "Moscow";
user.age = 34;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);


let nameLast = prompt("Как вас зовут?");
alert(`Привет ${nameLast}!`)
