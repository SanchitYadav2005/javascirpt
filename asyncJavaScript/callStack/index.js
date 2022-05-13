const multiply = (x, y) =>{
    return x*y;
}
const square = (x) =>{
    return multiply(x, x)
}

const isRightTringle = (a, b , c)=>{
    return square(a) + square(b)  === square(c)
}

console.log(isRightTringle(3,4,5))