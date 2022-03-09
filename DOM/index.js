// this is how we can select elements using javaScript.


console.log(document.getElementsByClassName('main'))
console.log(document.getElementsByTagName('p'))
console.log(document.getElementById('second'))


// query selector

console.log(document.querySelector('div p'))
console.log(document.querySelectorAll('div'))


// innerText property.

document.querySelector('p').innerHTML = "My Name is Sanchit Yadav"; // this helps you to get or change the inner text of the choosen element.

// attribute

console.log(document.querySelector('div').id)



// styling the element.


const allDiv = document.querySelector('div')
allDiv.style.fontSize = '4em'
allDiv.style.color = 'red'


const img1 = document.createElement('img')
img1.src = 'https://images.unsplash.com/photo-1646848296025-23ad24e03119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
document.body.appendChild(img1)// this is how you can add at the last


const img2 = document.createElement('img')
img2.src = 'https://images.unsplash.com/photo-1646848296025-23ad24e03119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
document.body.prepend(img2) // this is how you cna add at the first.


const h2 = document.createElement('h2')
h2.append("hello")
console.log(h2)
const img = document.querySelector('img')                   
img.insertAdjacentElement('afterbegin', h2)