// destucturing of object 
const brainStain = {
    id: 1,
    designation: 'Jr Web Developer',
    name: 'Ruhul Juwel',
    age: 24,
    skills: {
        learner: 'typscript, react native',
        comfort: 'react node',
        basic: 'html css js',
    }
}
const { basic, learner } = brainStain.skills;

// destucturing of array 
const fuel = [24, 56, 89, 234];
const [a, b] = fuel;

// optional chaining 
const oil = [80, 120, 200];
const [x, y] = oil;
// console.log(x, y?.b?.a);

// map on an array
const marksheet = [14, 25, 68, 39, 80, 86, 72];
const gpa = marksheet.map(mark => mark * 2)

// map on the string array 
const shop = [
    { name: 'panjabi', price: 1500, color: 'white' },
    { name: 'pajam', price: 780, color: 'white' },
    { name: 'sandal', price: 1100, color: 'white' },
    { name: 'pant', price: 890, color: 'white' },
    { name: 'shirt', price: 500, color: 'white' }
];
const output = shop.map(item => item.name);
const output1 = shop.map(item => item.price);
// for each on array 
// shop.forEach(item => console.log(item));

// filter apply on array 
const products = [
    { name: 'panjabi', price: 1500, color: 'green' },
    { name: 'pajam', price: 780, color: 'yellow' },
    { name: 'sandal', price: 1100, color: 'black' },
    { name: 'pant', price: 890, color: 'white' },
    { name: 'shirt', price: 500, color: 'white' }
];
// const item1 = products.filter(product => product.price > 1000)
// const item1 = products.filter(product => product.color == 'white')
const item1 = products.find(product => product.color == 'white')

// create a class 
class Developer {
    name;
    designation;
    phone;
    constructor(name, designation, phone) {
        this.name = name,
            this.designation = designation,
            this.phone = phone
    }
}
const input = new Developer('Ruhul', 'MERN Developer', 220077);
console.log(input);

