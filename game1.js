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

