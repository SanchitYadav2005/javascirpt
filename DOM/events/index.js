console.log("i am working")

const btn = document.querySelector('.onclick');

btn.onclick = function(){ // thats one of doing this 
    console.log("it's working!!")
}

// there is a best way to doing it.

const newBtn = document.querySelector('button')

newBtn.addEventListener('click', function(){
    console.log("FUUUUUUUCK!!")
})