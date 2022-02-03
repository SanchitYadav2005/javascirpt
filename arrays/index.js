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