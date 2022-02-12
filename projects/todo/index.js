let input = prompt("What would you like to do?");
const todos = ['Collect chicken eggs','clean litter box']
while(input!=='quit' && input !== 'q'){
    if(input==='list'){
        console.log("***********")
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }if(input==='new'){
            const newTodo = prompt("Ok, What is the new todo?")
            todos.push(newTodo);
            console.log(`${newTodo} added to the list`)
        }else if(input==='del'){
            const index = prompt("Ok, enter an index to delete:")
            todos.splice(index
                ,1)
            console.log(index)
        }
        console.log("***********")
    }
    input = prompt("What would you like to do?")
}
console.log("Ok QUit the app")