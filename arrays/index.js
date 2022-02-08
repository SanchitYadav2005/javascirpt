const days = ["monday", "tuesday", "wednesday", "thursday", "firday", "saturday", "sunday"];
console.log(days[4]);

// modifing arrays

const colors = ["rad", "green" ,"yellow","ble"];
colors[0]="red";
colors[3]="blue";
console.log(colors[0])
console.log(colors[3]) // we can also add an element like that.


// push and pop methods

const barbell = [];
barbell.push(40);
barbell.push(30);
barbell.push(20);
barbell.push(2.5);
console.log(barbell);
const storedValue = barbell.pop();
console.log(storedValue);


// shift and unshift methods
const movieQeue = ["sanchit", "navneet", "rohit", "dabbu"]
let enteries = movieQeue.shift();
console.log(enteries);
let newVipEnteries = movieQeue.unshift("shreya");
console.log(movieQeue)
console.log(Array.isArray(movieQeue))

// nested arrays

const playerScore =[
    [120,90,40],
    [50,100,40],
    [110,89,90]
]

console.log(playerScore)
console.log(playerScore[0][0])
console.log(playerScore[1][1])
console.log(playerScore[2][2])
