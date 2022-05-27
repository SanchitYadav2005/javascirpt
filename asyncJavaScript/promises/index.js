const fakeRequest = (url) => {
    return new Promise((resolve, rejected)=>{
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve(url)
            }else{
                rejected("connection timeout!!")
            }
        }, rand);
    })
}

fakeRequest('books.com')
    .then((data)=>{
        console.log('your data is here from ',data)
    })
    .catch((err)=>{
        console.log('error:', err)
    })


// changing the background color using promisis.


const changeBakcgroundColor = (color, delay) => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            response();
        }, delay);
        
    })
}

changeBakcgroundColor('red', 1000)
    .then(() => changeBakcgroundColor('blue', 1000))
    .then(() => changeBakcgroundColor('green', 1000))
    .then(() => changeBakcgroundColor('yellow', 1000))
    .then(() => changeBakcgroundColor('black', 1000))
    .then(() => changeBakcgroundColor('orange', 1000))
    .then(() => changeBakcgroundColor('voliet', 1000))
    .then(() => changeBakcgroundColor('indigo', 1000))