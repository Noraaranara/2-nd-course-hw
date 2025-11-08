const gameFirst = () => {
    const rndNumber = Math.floor(Math.random() * 100) + 1;

    let userInput, userNumber;

    for (;;) {
        userInput = (prompt("Введите число от 1 до 100"))

        if (userInput === null) {
            break;
        }

        userNumber = Number(userInput);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert("Введено неверное значение");
            continue;
        } 
        
        if (userNumber === rndNumber) {
            alert("Умница, число угадано верно");
            break;
        } else {
            alert(`Введёное число ${userNumber > rndNumber ? 'больше' : 'меньше'} загаданного!`);
        }
    }

    if (confirm('Сыграть ещё раз?')) {
        gameFirst();
    }
}

const gameSecond = () => {
    const operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    let a, b, result;
    let userAnswer;
    
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);

    for(; a < b;) {
        a = Math.floor(Math.random() * 10 + 1);
        b = Math.floor(Math.random() * 10 + 1);
    }

    const applyOperator = (operator, a, b) => {
        switch (operator) {
            case '+':
                return a + b;

            case '-':
                return a - b;

            case '*':
                return a * b;

            case '/':
                return a / b;
        }
    }

    
    result = Math.floor(applyOperator(operator, a, b));
    userAnswer = Number(prompt(`Сколько будет  ${a} ${operator} ${b} ?`));

    if (userAnswer === result) {
        alert(`Правильно!`);
    } else {
        alert(`неправильно! Правильный ответ: ${result}`);
    }

    if (confirm('Сыграть ещё раз?')) {
        gameSecond();
    }

}
