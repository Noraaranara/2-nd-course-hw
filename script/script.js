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