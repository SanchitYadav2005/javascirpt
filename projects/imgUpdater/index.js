console.log("working")
const changeBackground = document.querySelector('h1')
function makeColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256)
    return `rgb(${r} ${g} ${b})`
}
changeBackground.addEventListener("click", function(){
    changeBackground.style.color = makeColor()
    const rgbArr = []
    rgbArr.push(makeColor())
    console.log(rgbArr)
    console.log(rgbArr.length)
})

const imgs = document.querySelectorAll('img')

for(let img of imgs){
    img.addEventListener("click", function(){
        img.src = "img/1651314020769.jpg"
    })
}