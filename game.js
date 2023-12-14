function game1() {
    let numberMonth = prompt('Введите номер месяца');
    if (numberMonth === 12 || numberMonth === 1 || numberMonth === 2) {
        alert('Зима');
    } else if (numberMonth >= 3 && numberMonth <= 5) {
        alert('Весна');
    } else if (numberMonth >= 6 && numberMonth <= 8) {
        alert('Лето');
    } else if (numberMonth >= 9 && numberMonth <= 11) {
        alert('Осень');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

function game2() {
    let wordArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    wordArr = wordArr.sort(() => Math.random() - 0.5);
    alert(wordArr);
    wordArr = wordArr.map(el => el.toLocaleLowerCase());
    let answ1 = prompt('Чему равнялся первый элемент массива?');
    answ1 = answ1.toLocaleLowerCase();
    let answ2 = prompt('Чему равнялся последний элемент массива?');
    answ2 = answ2.toLocaleLowerCase();
    if (answ1 === wordArr[0] && answ2 === wordArr[6]) {
        alert('Поздравляю, ты угадал верно!');
    } else if (answ1 === wordArr[0] || answ2 === wordArr[6]) {
        alert('Ты были близок к победе!');
    } else {
        alert('Не верно, попробуй еще раз.');
    }
}

