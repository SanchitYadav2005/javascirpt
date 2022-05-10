const form = document.querySelector("#shelter");
const input = document.querySelector("#ans");
const list = document.querySelector("#iteams");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const listIteam = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = listIteam;
    list.append(newLi)
    input.value = "";
})