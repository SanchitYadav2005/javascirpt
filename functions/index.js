function like(){
    document.write("I ")
    document.write("only ")
    document.write("like ")
    document.write("coding ")
}

like();

//working with parameters and arguments,

function greet(person)/** note :- person is a parameter here*/{
    document.write(`hello ${person}`)
}
greet("rohan") // rohan is an argument here

// multiple argumnets

function form(name, age){
    if (age===18) {
        document.write(`your welcome ${name}`)
    }else{
        document.write(`you're not welcome ${name}`)
    }
}
form('sanchit',18)


// return keyword

function area(width, height){
    if (width > 0 && height > 0) {
        return width*height;
    }else{
        return 0;
    }
}
const areaa = area(4,5)
console.log(areaa)