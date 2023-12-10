const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] = 10) {
        console.log(arr[i]);
        break;
    }
}


const mass = [1, 5, 4, 10, 0, 3];
console.log(mass.indexOf(4));


const arrJoin = [1, 3, 5, 10, 20];
console.log(arrJoin.join(' '));


const manyArs = [];
for (let j = 0; j < 3; j++) {
    manyArs.push([]);
    for (let i = 0; i < 3; i++) {
        manyArs[j][i] = 1;
    }
}
console.log(manyArs);


const grumpy = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    grumpy.push(2);

}
console.log(grumpy);


const nums = [9, 8, 7, 'a', 6, 5];
nums.sort();
nums.pop();
console.log(nums);


const guess = [9, 8, 7, 6, 5];
let game = Number(prompt('Введите число'));
let search = guess.includes(game) ? console.log('Угадал') : console.log('Не угадал');


let lamp = 'abcdef';
const arrayLamp = lamp.split('');
arrayLamp.reverse();
let paml = arrayLamp.join('');
console.log(paml);


const multiArr = [[1, 2, 3,], [4, 5, 6]];
const merge = multiArr.flat(1);
console.log(merge);

const multi = [[1, 2, 3,], [4, 5, 6]];
const merge1 = [].concat.apply([], multi);
console.log(merge1);


const mine = [1, 5, 3, 4, 6, 10];
for (let i = 0; i < mine.length - 1; i++) {
    console.log(mine[i] + mine[i + 1]);
}


const omg = [5, 25, 89, 64, 78, 1, 1567];
const square = omg.map(double => double ** 2);
console.log(square);


const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const lengthOfWards = [];
for (let i = 0; i < words.length; i++) {
    lengthOfWards.push(words[i].length);
    console.log(lengthOfWards);
}


function filterPositive(array) {
    const negative = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negative.push(array[i])
        }
    }
    return negative;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));


const randomNum = [];
const evenNum = [];
for (let i = 0; i < 10; i++) {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let rand = getRndInteger(0, 10);
    randomNum.push(rand);
}
for (let j = 0; j < randomNum.length; j++) {
    if (j % 2 === 0) {
        evenNum.push(j);
    }
}
console.log(randomNum);
console.log(evenNum);


const anotherRandNum = [];
for (let i = 0; i < 6; i++) {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let rand = getRndInteger(1, 10);
    anotherRandNum.push(rand);
}
console.log(anotherRandNum);
const totalSum = anotherRandNum.reduce((a, b) => a + b);
console.log(totalSum);
const mid = totalSum / anotherRandNum.length;
console.log(mid);