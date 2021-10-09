const header = 'Cars For Sale';
const cars = [
    {
        img: 'assets/img/img-1.webp',
        car: 'Audi',
        model: 'A6',
        age: 2014,
        price: 20900
    },


    {
        img: 'assets/img/img-2.webp',
        car: 'Mazda',
        model: '6',
        age: 2015,
        price: 5500
    },


    {
        img: 'assets/img/img-3.webp',
        car: 'Hyundai',
        model: 'Tucson IDEAL',
        age: 2018,
        price: 25800
    },


    {
        img: 'assets/img/img-4.webp',
        car: 'Mazda',
        model: '6 Grand Touring',
        age: 2015,
        price: 13600
    },


    {
        img: 'assets/img/img-5.webp',
        car: 'Porsche',
        model: 'Panamera',
        age: 2010,
        price: 25000
    },


    {
        img: 'assets/img/img-6.webp',
        car: 'Mercedes-Benz',
        model: 'CLS 220 Shooting',
        age: 2017,
        price: 39500
    },


    {
        img: 'assets/img/img-7.webp',
        car: 'Nissan',
        model: 'X-Trail 4x4 GAZ',
        age: 2010,
        price: 17500
    },


    {
        img: 'assets/img/img-8.webp',
        car: 'Opel',
        model: 'Zafira ERODYNAMIC OPS SPORT',
        age: 2009,
        price: 7490
    },


    {
        img: 'assets/img/img-9.webp',
        car: 'BMW',
        model: 'X5 M',
        age: 2019,
        price: 92000
    },


    {
        img: 'assets/img/img-10.webp',
        car: 'Ford',
        model: 'Focus SE flex fuel',
        age: 2015,
        price: 8800
    },
];

console.log(cars);





let div = document.createElement('div');
div.className = 'cars-list';
let h1 = document.createElement('h1');
h1.innerHTML = header;
div.append(h1);
for (let item of cars) {
    let div_child = document.createElement('div');
    div_child.className = 'cars-list__item';
    div_child.innerHTML = `<h4 class="subheader">${item['car']} ${item['model']}
    </h4> <div>Production year: ${item['age']}. Price: <b>$${item['price']}</b></div>
    <div class="car-image"><img src="${item['img']}">`;
    div.append(div_child);
}

document.body.append(div);