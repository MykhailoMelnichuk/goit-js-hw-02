console.log('Задание 6');
let input;
const numbers = [];
let total = 0;
let inputNamber;
while (input !== null) {
    input = prompt('Введите число:');
    inputNamber = Number(input);
    if (Number.isNaN(inputNamber)) {
        alert('Было введено не число, попробуйте еще раз.');
    } else if (inputNamber !== 0) {
        numbers.push(inputNamber);
    }
}

if (numbers.length === 0) {
    alert('Вы не ввели ни одного числа.');
} else {
    for (let i = 0; i < numbers.length; i += i) {
        total = total + numbers[i];
    }
    console.log(`Общая сумма чисел равна ${total}.`);
};

console.log(`Общая сумма чисел равна ${total}.`);