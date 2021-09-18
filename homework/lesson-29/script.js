// Задание 2
let person = {
    name: 'Сергей',
    age: '25',
    sayHello: function () {
        return `Добрый день, ${this.name}. Вам ${this.age} лет.`;
    }
}
console.log(person.sayHello());

// Задание 3
let askList = [
    'Как вас зовут?',
    'Сколько вам лет?',
    'Вы женаты / замужем?',
    'Кем вы работаете?',
    'Какая у вас ЗП?',
    'Где вы были за границей, последний раз?',
];
let answers = {
    name: null,
    age: null,
    family: null,
    job: null,
    salary: null,
    abroad: null
};
for (let i = 0; i < askList.length; i++) {
    let labelId = 'label' + (i + 1);
    document.getElementById(labelId).textContent = askList[i];
}

document.querySelector('.b-1').addEventListener('click', () => {
    answers.name = document.querySelector('#i1').value;
    answers.age = document.querySelector('#i2').value;
    answers.family = document.querySelector('#i3').value;
    answers.job = document.querySelector('#i4').value;
    answers.salary = document.querySelector('#i5').value;
    answers.abroad = document.querySelector('#i6').value;

    let inputs = document.getElementsByTagName('input');
    for (let item of inputs) {
        item.value = '';
    }

    console.log(answers);
});
