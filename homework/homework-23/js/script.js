function f1() {
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let age = 2021 - document.querySelector('#year').value;

    console.log('Фамилия: ' + surname);
    console.log('Имя: ' + name);
    console.log('Возраст: ' + age);
}
document.querySelector('.b-1').onclick = f1;