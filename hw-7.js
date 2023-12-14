let str = 'js';
console.log(str.toUpperCase());

const arrStr = ['Crab', 'Cat', 'Dog', 'Stomper', 'Sardines', 'Dots'];
const strr = 'do';
const arrAnswer = []
function newFunction(arrStr, strr) {
    arrStr.forEach(el => {
        if ((el.toLowerCase()).startsWith(strr.toLowerCase())) {
            arrAnswer.push(el);

        }
    });
    console.log(arrAnswer);
}
newFunction(arrStr, strr);


let n = 32.58884;
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));


const arrNum = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...arrNum));
console.log(Math.min(...arrNum));


const randNum = (min, max) => {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randNum(0, 10));


const getRandomArrNumbers = (x) => {
    const array = [];
    for (let i = 0; i < x; i++) {
        let v = Math.floor(Math.random() * (x + 1));
        array.push(v);
    }
    return array;
}
console.log(getRandomArrNumbers(7));


const randAgain = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(randAgain(4, 9));


console.log(new Date());


let currentDate = new Date();
console.log(currentDate.getDate(currentDate.setDate(73)));


let date = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
console.log(date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' - это ' + days[date.getDay()]);
console.log(`Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);