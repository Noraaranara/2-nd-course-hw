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
            alert(`Введённое число ${userNumber > rndNumber ? 'больше' : 'меньше'} загаданного!`);
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

const gameFifth = () => {
    const options = ['камень', 'ножницы', 'бумага'];

    for(;;) {
        let compAnswer = Math.floor(Math.random() * options.length);
        let userChoice = prompt("Выберите: камень, ножницы или бумага.");

        if (userChoice === null) {
            alert("Игра прервана");
            break;
        }

        let isUserChoiceNumberCorrect = Number(userChoice) >= 1 && Number(userChoice) <= options.length;
        let normalChoice = options.map(c => c 
            .replace(/^\d+\.\s*/,'')
            .trim()
            .toLowerCase()
        );

        let normalUserChoice = userChoice
            .trim()
            .replace(/^\d+\.\s*/,'')
            .toLowerCase();
        
        let isUserChoiceStringCorrect = normalChoice.includes(normalUserChoice);
        if (!isUserChoiceNumberCorrect && !isUserChoiceStringCorrect) {
            alert(`Введено неверное значение. Попробуйте ещё раз`);
            continue;
        }

        let userChoiceValidNumberIndex = Number(userChoice);
        let userChoiceValidStringIndex = normalChoice.indexOf(normalUserChoice);
        let userChoiceFinalIndex = userChoiceValidNumberIndex >= 0 ? userChoiceValidNumberIndex : userChoiceValidStringIndex;

        if (userChoiceFinalIndex === compAnswer) {
            alert(`Ничья!`);
        } else if (
            (userChoiceFinalIndex === 0 && compAnswer === 1) || 
            (userChoiceFinalIndex === 1 && compAnswer === 2) ||
            (userChoiceFinalIndex === 2 && compAnswer === 0)
        ) {
            alert(`Вы победили🤗!  Компьютер выбрал: ${options[compAnswer]}`);
        } else {
            alert(`Вы проиграли😭!  Компьютер выбрал: ${options[compAnswer]}`);
        }

        if (!confirm('Сыграть ещё раз?')) break;
    }
}

const gameSixth = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return '#' + 
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0');
}

const btnEl = document.getElementById('btn-6');
const bgEl = document.querySelector('.games');

btnEl.addEventListener('click', function() {
    const randomColor = gameSixth();
    bgEl.style.backgroundColor = randomColor;
    alert(`Текущий цвет: ${randomColor}`)
});
