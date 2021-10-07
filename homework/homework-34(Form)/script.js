let answers = {};
let fields = document.querySelectorAll('.field');

function f1(event) {
    event.preventDefault();
    if (checkFields(event) !== false) {              //можно так делать?
        for (let field of fields) {
            let key = field.name;
            let val = field.value.trim();
            answers[key] = val;
        }
        let out = '';
        for (let key in answers) {
            out += `${key}: ${answers[key]} <br>`;
        }
        console.log(answers);
        document.querySelector('.out').innerHTML = `<h3>Ваш заказ:</h3> ${out}`;
    }
    else {
        document.querySelector('.out').innerHTML = `Укажите Ваше Имя!`;
    }
}

function checkFields(event) {
    for (let item of fields) {
        if (item.value.trim() === '') {
            event.preventDefault();
            item.classList.add('error');
            return false;                    //добавила return false
        } else {
            item.classList.remove('error');
        }
        item.addEventListener('change', () => {
            if (item.value !== '') item.classList.remove('error');
        });
    }
}

document.querySelector('form').addEventListener('submit', f1);