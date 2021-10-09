const input1 = document.querySelector('#input1');

document.querySelector('.btn-save').addEventListener('click', () => {
    if (input1.value.trim() !== '') {
        localStorage.setItem('key1', input1.value);
        document.querySelector('.out1').textContent = `Сохраненное значение: ${input1.value}`;
    }

});
document.querySelector('.btn-clear').addEventListener('click', () => {
    localStorage.clear();
    document.querySelector('.out1').textContent = `LocalStorage пуст`;

});


