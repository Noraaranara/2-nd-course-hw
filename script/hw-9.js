console.log('\n%c Задание №1:', 'color:green');
const btnEl = document.querySelector('.btn-remove');

btnEl.addEventListener('click', function (e) {
    const textToRemove = document.querySelector('.hdr');
    textToRemove.remove();
});


console.log('\n%c Задание №2:', 'color:green');
const btnElColor = document.querySelector('.btn-color');

btnElColor.addEventListener('click', function (e) {
    const textBlue = document.querySelector('.desc');
    textBlue.style.color = 'blue';
});


console.log('\n%c Задание №:3', 'color:green');
const btnElReplace = document.querySelector('.btn-replace');

btnElReplace.addEventListener('click', () => {
    const newHdr = document.querySelector('.hdr-replace');
    newHdr.textContent = 'Привет, мир!';
})


console.log('\n%c Задание №:4', 'color:green');
const newDescrip = document.querySelectorAll('.description');
newDescrip.forEach(descript => {
    descript.textContent = 'Измененный текст!';
});


console.log('\n%c Задание №:5', 'color:green');
const newSubtit = document.querySelectorAll('.subtit1');
newSubtit.forEach(sub => {
    sub.textContent = 'Новый текст';
});


console.log('\n%c Задание №:6', 'color:green');
const btnAdd = document.querySelector('.btn-add');

btnAdd.addEventListener('click', () => {
    const titleEl = document.createElement('p');
    titleEl.textContent = 'Новый абзац';
    document.body.appendChild(titleEl);
})


console.log('\n%c Задание №:7', 'color:green');
const btnRemoveFirst = document.querySelector('.remove-first');

btnRemoveFirst.addEventListener('click', () => {
    const sub3 = document.querySelector('.subtit3');
    sub3.remove();
})


