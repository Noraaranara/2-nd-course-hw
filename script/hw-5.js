// // 1)
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// let result = min(8, 4);
// let result2 = min(6, 6);

// console.log(result, result2);

// // 2)
// function num(n) {
//     if (n % 2 == 0) {
//         return ('Число четное');
//     } else {
//         return ('Число нечетное');
//     }
// }

// let result = num(4);
// let result2 = num(9);

// console.log(result, result2);

// // 3)
// function math(num) {
//     console.log(`Квадрат числа ${num} равен ${num ** 2} `);
// }

// math(8)

// // 3.2)
// function math(num) {
//     return num ** 2;
// }

// const result = math(3);
// console.log(result);

// // 4)
// function accept() {

//     for(;;) {
//         const age = prompt(`Введите свой возвраст`)

//         userNumber = Number(age);

//         if (isNaN(userNumber) || userNumber <= 0) {
//             alert('Вы ввели неправильное значение');
//             continue;
//         }

//         if (userNumber <= 12) {
//             alert(`'Привет, друг!'`)
//             break;
//         }

//         else {
//             alert(`'Добро пожаловать!'`)
//             break;
//         }
//     }
// }

// accept();

// // 5)
// function numbers(a, b) {

//     let num1 = Number(a);
//     let num2 = Number(b)

//     if (isNaN(num1) || isNaN(num2)) {
//         return(`Одно или оба значения не являются числом`)
//     } else {
//         return a * b;
//     }
    
// }

// console.log(numbers(`n`, 6)); 

// // 6)
// const num = () => {

//     for (;;) {
//         userNum = (prompt("Введите число"));

//         if (isNaN(userNum)) {
//             return('Переданный параметр не является числом');
//         }

//         else {
//             return(`${userNum} в кубе равняется ${userNum ** 2}`);
//         }
//     }
// }

// alert(num());

// 7)
function getCircleArea() {
    return(`Площадь круга ${this.name} составляет : ${Math.PI * this.radius * this.radius}`);
}

function getCirclePerimeter() {
    return (`Периметр круга ${this.name} составляет ${2 * Math.PI * this.radius}`)
}

    const circle1 = {
        name: 'circle1',
        radius: 4,
        getArea: getCircleArea,
        getPerimeter: getCirclePerimeter
    }

    const circle2 = {
        name: 'circle2',
        radius: 9,
        getArea: getCircleArea,
        getPerimeter: getCirclePerimeter
    }

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());
