const login = async (username, password) => {
    if(!username || !password) throw 'missing credentials'
    if(password === user) return 'welcome'
    throw 'invalid password'
}
const user = prompt("enter your username")
const userPassword = prompt("enter your password")

login(user, userPassword)
    .then((msg) => {
        console.log("logged in", msg , user)
    })
    .catch((err) => {
        console.log("error", err)
    })