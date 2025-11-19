console.log('\n%c Задание №1:', 'color:green');
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people1.sort((a, b) => a.age - b.age));


console.log('\n%c Задание №2:', 'color:green');
function isPositive(numb) {
    return numb > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }        
    }
    return result;  
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));


console.log('\n%c Задание №3:', 'color:green');
const currentDate = () => {
    console.log(new Date().toLocaleString());
};

// currentDate();

const interval = setInterval(currentDate, 3000);

setTimeout(() => {
    clearInterval(interval);
    console.log(`30 секунд прошло`);
}, 30000);

currentDate(30);


console.log('\n%c Задание №4:', 'color:green');
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

console.log('\n%c Задание №5:', 'color:green');
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond(() => sayHi('Глеб'));

// коммент для повторного пуша