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



