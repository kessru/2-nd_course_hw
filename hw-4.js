let a = 0;
while (a < 2) {
    a++;
    console.log('Привет');
}

let b = 1;
do {
    console.log(b);
    b++;
} while (b < 6);

for (let c = 7; c < 23; c++) {
    console.log(c);

}

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}
for (const key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);

}

let n = 1000;
let num = 0;
for (; n >= 50; n /= 2) {
    num++;
}
console.log(`Получилось число ${n}. Число итераций равно ${num}.`);

for (let first = 1; first <= 31; first += 7) {
    console.log(`Сегодня пятница, ${first}-е число. Необходимо подготовить отчет.`);
}