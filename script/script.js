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
    
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;

    for(; a < b;) {
        a = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * 10) + 1;
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

const gameThird = () => {
    let text;
    console.log(text);
    for(;;) {
        text = prompt(`Введите текст`);
        if (text === null) {
            break;
        }
        
        let reversedText = text.split('').reverse().join('');

        alert(`Перевёрнутый текст: ${reversedText}`);

        if (!confirm('Сыграть ещё раз?')) {
            break;
        }
    }
}

const gameForth = () => {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    do {
        let rightAnswers = 0;
        for (let q of quiz) {
            let message = `${q.question}\n${q.options.join('\n')}`;
            let answer = prompt(message);
            if (answer === null) {
                alert(`Викторина прервана!`)
                return;
            }
            let correctNum = Number(answer) === q.correctAnswer;
            let correctText = answer.trim().toLowerCase() === q.options[q.correctAnswer - 1]
                .replace(/^\d+\.\s*/,'')
                .toLowerCase();

            if (correctNum || correctText) {
                alert(`Правильно!`);
                rightAnswers++;
            } else {
                alert(`Неправильно!`);
            }
        }

        alert(`Викторина завершена, правильных ответов: ${rightAnswers} из ${quiz.length}`);
    } while (confirm('Сыграть ещё раз?'));
}
