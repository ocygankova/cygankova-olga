// Функция-конструктор обьекта
function Pet(name, animal, age, owner, id) {
    this.name = name;
    this.animal = animal;
    this.age = age;
    this.owner = owner;
    this.id = id;
}

let lucky = new Pet('Lucky', 'dog', 6, 'John Smith', '000253123');
let golden = new Pet('Golden', 'dog', 8, 'Joe Bloe', '000002336')
let buddy = new Pet('Buddy', 'cat', 12, 'Sarah Lynn', '015236080');

console.log(lucky);
console.log(buddy);
console.log(golden);


//динамичсекий набор ключей для ФК
function Project(object) {
    for (let key in object) {
        this[key] = object[key];
    }
}



let www = new Project({ name: 'World Wide Web', budget: 13587346623, deadline: '5 year' });
let tesla = new Project({ name: 'Tesla', budget: 99999999999, deadline: '2 year', founder: 'Elon Musk' });
console.log(www);
console.log(tesla);