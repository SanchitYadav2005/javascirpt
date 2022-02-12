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


const newArray = ["rohan", "mohan", "ram", "shyam"]
for (const list of newArray) {
    console.log(list.toUpperCase())
}

// iterating over an object

const marks = {
    sanchit:89,
    navneet:53,
    abhishek:55,
    rohit:32,
    nirdesh:23,
    pankaj:54,
    vikas:75,
    shivam:76,
    nirbahy:67,
    ashwani:65,
    abhinav:75,
    ambuj:54,
    saurab:56,
    prashant:76,
    mohit:76,
    harshit:75
};

for (const individualInfo in marks) {
    console.log(`${individualInfo} scored ${marks[individualInfo]}`)
}