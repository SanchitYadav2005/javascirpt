const conatiner = document.querySelector('#container')
const BaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const howMany = prompt("How many sprites you want?");


for (let i = 0; i < howMany; i++) {
    const newImg = document.createElement('img')
    newImg.src = `${BaseUrl}${i}.png`
    conatiner.appendChild(newImg)
}