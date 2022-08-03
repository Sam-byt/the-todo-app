updateList();

function addTask(){
    const todo = document.getElementById('todo').value;
    const desc = document.getElementById('desc').value;

    if(todo && desc) {
        const items = JSON.parse(localStorage.getItem('Todos'));
        
    
        const todo_item = {
            slno: items.length+1,
            todo: `${todo}`,
            description: `${desc}`
        }
    
        const newItems =  [...items, todo_item];
        localStorage.setItem('Todos',JSON.stringify(newItems));
    
        updateList();
    }

    else{
        alert('Please insert info correctly');
    }

    
}

function generateItem(element){
    return `<p><b>Sl No.</b> : ${element.slno}</p>
            <p><b>To Do</b> : ${element.todo}</p>
            <p><b>Description</b> : ${element.description}</p>
            <button class="removeBtn btn btn-sm btn-outline-danger" onclick="removeItem(${element.slno})">Remove</button>   
            <hr />` 
}

function removeItem(idx){
    const todos = JSON.parse(localStorage.Todos);
    todos.splice(idx-1, 1);
    for(let i= idx-1;i<todos.length;i++){
        todos[i].slno = todos[i].slno - 1;
    }
    localStorage.setItem('Todos',JSON.stringify(todos));
    updateList();
}
        


function updateList(){

    if(!localStorage.getItem('Todos')){
        localStorage.setItem('Todos', JSON.stringify([]));
        document.querySelector('.myTodos').innerHTML = "No todos as of now. Add here."
        return;
    }
    const todos = JSON.parse(localStorage.Todos);
    if(todos.length === 0){
        document.querySelector('.myTodos').innerHTML = "No todos as of now. Add here.";
        return;
    }
    let str = '';
    const todos_list = todos.map(generateItem);
    todos_list.forEach((item)=>{
        str += item;
    })
    document.querySelector('.myTodos').innerHTML = str;
}