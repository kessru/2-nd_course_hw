const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);




function isPositive(number) {
    return number >= 0;
}

function isMale(peoples) {
    return peoples.gender === 'male';
}

function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peoples, isMale));



let timerId = setInterval(() => {
    console.log(new Date());
}, 3000);
setTimeout(() => {
    clearInterval(timerId); console.log('30 секунд прошло');

}, 30000);




function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);

}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})





function delayForSeconds(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}


function sayHi(name) {
    console.log(`Привет, ${name}!`);
}


delayForSeconds(() => sayHi('Глеб'))