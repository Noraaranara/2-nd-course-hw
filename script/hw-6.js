console.log('\n%c Задание №1:', 'color:green');
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] == 10) {
        break;
    }
}

console.log('\n%c Задание №2:', 'color:green');
const index = arr.indexOf(4);
console.log(`Индекс числа 4:`, index);


console.log('\n%c Задание №3:', 'color:green');
const arr3 = [1, 3, 5, 10, 20];
let joinText = arr3.join(' ');
console.log(joinText);


console.log('\n%c Задание №4:', 'color:green');
let emptyArr = [];

for (let i = 0; i < 3; i++) {
    emptyArr.push([]);
    for (let j = 0; j < 3; j++) {
        emptyArr[i].push(1);
    }
}
console.log(emptyArr);


console.log('\n%c Задание 5:', 'color:green');
let arr5 = [1, 1, 1];
arr5.push(2, 2, 2);

console.log(arr5);


console.log('\n%c Задание №6:', 'color:green');
let arr6 = [9, 8, 7, 'a', 6, 5];

let sortedArr6 = arr6.sort();
let filteredArr6 = sortedArr6.filter(number => number !== 'a');

console.log(`Отсортированный массив чисел:`,filteredArr6);


console.log('\n%c Задание №7:', 'color:green');
const arr7 = [9, 8, 7, 6, 5];

const userInput = prompt(`Угадай число!`)
const guessNumber = Number(userInput);

if (arr7.includes(guessNumber)) {
    alert(`Угадал`);
}   else {
    alert(`Не угадал`);
}


console.log('\n%c Задание №8:', 'color:green');
const string = 'abcdef';
const updatedString = string.split('').reverse().join('');
console.log(`Строка ${string} в обратном порядке:`, updatedString);


console.log('\n%c Задание №9:', 'color:green');
const arr9 = [[1, 2, 3],[4, 5, 6]];
const unitedArr9 = [...arr9[0], ...arr9[1]];
console.log(`Объединение массивом ${arr9[0]} и ${arr9[1]}:`, unitedArr9);


console.log('\n%c Задание №10:', 'color:green');
let rndArr = Array.from({length: 10}, () => Math.floor(Math.random() * 10 + 1));
console.log(rndArr);

for (let i = 0; i < rndArr.length - 1; i++) {
    console.log(`${rndArr[i]} + ${rndArr[i + 1]} = ${rndArr[i] + rndArr[i + 1]}`);
}


console.log('\n%c Задание №11:', 'color:green');
const updatedRndArr = rndArr.map(number => number ** 2)
console.log(updatedRndArr);


console.log('\n%c Задание №12:', 'color:green');
const stringArr = ['Привет', 'Небо', 'Трава'];
console.log(`Массив слов:`, stringArr);

const lengthWord = stringArr.map(word => word.length);
console.log(`Массив длины слов:`, lengthWord);


console.log('\n%c Задание №13:', 'color:green');
let negativeRndArr = Array.from({length: 20}, () => Math.floor(Math.random() * 201) - 100);
console.log(negativeRndArr);

const negativeArr = negativeRndArr.filter(number => number < 0);
console.log(negativeArr);


console.log('\n%c Задание №14:', 'color:green');
console.log(`Исходный массив:`,rndArr);

const positiveArr = rndArr.filter(number => number % 2 === 0);
console.log(`Массив положительных чисел:`,positiveArr);


console.log('\n%c Задание №15:', 'color:green');
let rndArr6 = Array.from({length: 6}, () => Math.floor(Math.random() * 10 + 1));
console.log(`Исходный массив:`, rndArr6);

const sum = rndArr6.reduce((total, rndArr6) => total + rndArr6, 0);
console.log(`Среднее арифметическое значение массива: ${sum / rndArr6.length}`);
