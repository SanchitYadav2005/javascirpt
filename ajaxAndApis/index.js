// getting the data using fetch

fetch("https://icanhazdadjoke.com/")
.then((res)=>{
    console.log("loaded", res)
})
.catch((error)=>{
    console.log("error", error)
})


// using an async function

const starWarsPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/1/")
    const data = await res.json() // parshing into json
    console.log(data)
}

starWarsPeople();


// using axios for fetching api's

axios.get("https://swapi.dev/api/people/1/")
.then((res)=>{
    console.log("loaded", res)
})
.catch((error)=>{
    console.log("error", error)
});

// doing axios inside async

const people = async () => {
    const res = await axios.get("https://swapi.dev/api/people/2/")
    console.log(res.data)
}
people()