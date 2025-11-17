console.log('\n%c Задание №1:', 'color:green');
console.log('Js'.toUpperCase());


console.log('\n%c Задание №2:', 'color:green');
const colors = ['light blue', 'green', 'purple', 'light green'];
const search = 'light';

colors.forEach((color) => {
    if (color.toLowerCase().startsWith(search.toLocaleLowerCase())) {
        console.log(color);
    }
});


console.log('\n%c Задание №3:', 'color:green');
let num = 32.58884;
console.log(`Округление числа ${num} до меньшего целого: ${Math.floor(num)}`);
console.log(`Округление числа ${num} до большего целого: ${Math.ceil(num)}`);
console.log(`Округление числа ${num} до ближайшего целого: ${Math.round(num)}`);


console.log('\n%c Задание №4:', 'color:green');
const arr4 = [52, 53, 49, 77, 21, 32];
const min = Math.min(...arr4);
const max = Math.max(...arr4);

console.log(`Минимальное значение:`, min);
console.log(`Максимальное значение:`, max);   


console.log('\n%c Задание №5:', 'color:green');
const random = () => {
    const rndNumber = Math.floor(Math.random() * 10);
    console.log(`Рандомное чило:`, rndNumber);
}
random();

console.log('\n%c Задание №6:', 'color:green');
const generateRandomArray = (num) => {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return (`Число должено быть положительным целым числом`)
    }

    const length = Math.floor(num / 2);

    const arr6 = [];
    for (let i = 0; i < length; i++) {
        arr6.push(Math.floor(Math.random() * (num + 1)));
    }
    
    return arr6;
}
console.log(
generateRandomArray(8));


console.log('\n%c Задание №7:', 'color:green');
const generateRandomNum = (min, max) => {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return (`Оба числа должены быть положительными целыми числами`)
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNum(38, 45));

console.log('\n%c Задание №8:', 'color:green');
console.log(new Date().toLocaleDateString());


console.log('\n%c Задание №9:', 'color:green');
const currentDate = new Date();
const currentTimestamp = currentDate.getTime();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = currentTimestamp + days73;
let futureDate = new Date(searchDate);

console.log(`Текущая дата:`, currentDate.toLocaleDateString());
console.log(`Дата через 73 дня:`, futureDate.toLocaleDateString());


console.log('\n%c Задание №10:', 'color:green');
const formatDate = (date) => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = days[date.getDay()];

    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());

    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
const now = new Date();
console.log(formatDate(now));