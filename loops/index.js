console.log("hello")

for(let i=0; i<=10;i++){
    console.log(i)
}
console.log("these are called Natural Numbers")
for(let i = 1; i<=10; i++){
    console.log(i)
}
console.log("these are called Real Numbers")


// looping over arrays

const animals = ["lion", "tiger", "elephant", "horse"]
for (let index = 0; index < animals.length; index++) {
    console.log(index, animals[index])
}
for(let i = animals.length-1; i >=0; i--){
    console.log(i, animals[i])
}

// nested loops

for(let i = 1; i <= 10; i++){
    console.log(`i is : ${i}`)
    for(let j = 1; j<4; j++){
        console.log(`    j is j: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(` #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}


// while loop


const secreat = "Sanchit";
let guess = prompt("enter the secreat")
while(guess !== secreat){
    guess = prompt("enter the secreat")
}
console.log("congrats")
