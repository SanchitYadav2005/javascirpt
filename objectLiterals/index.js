console.log("hello")

// creating the object.

const family = {
    fatherName: 'Umakant Yadav',
    motherName: 'Vinita Yadav',
    sisterName: 'Siddhi Yadav',
    myName: 'Sanchit Yadav'
}
console.log(family)
// accessing the data

console.log(family.myName)

//modifying objects.
// its same like array it just we are not using numbers

const marks = {
    sanchit: 98,
    navneet: 99,
    dabbu: 100,
}

marks["shreya"] = 120; // thats how we can modify or add more key-value pairs
console.log(marks)

// nesting array and objects.

const shopingCart = [
    {
        product: 'pencil',
        price: 4,
        quantity: 4
    },
    {
        product: 'rubber',
        price: 2,
        quantity: 4
    },
    {
        product: 'pants',
        price: 1500,
        quantity: 2
    }
]

console.log(shopingCart)

console.log(shopingCart[2].product)
console.log(shopingCart[2].price)
console.log(shopingCart[2].quantity)