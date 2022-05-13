const changeBackgroundColor = (color, delay, nextColor)=>{
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        nextColor()
    }, delay);
}

changeBackgroundColor('red', 1000, ()=>{
    changeBackgroundColor('blue', 1000, ()=>{
        changeBackgroundColor('green', 1000, ()=>{
            changeBackgroundColor('yellow', 1000, ()=>{
                changeBackgroundColor('teal', 1000, ()=>{
                })
            })
        })
    })
})

