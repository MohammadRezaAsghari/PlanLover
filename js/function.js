//saveData 
const saveDataInLocalStorage = function (name , todo){
    localStorage.setItem(name , JSON.stringify(todo));
}
//function add data
//input : todo title , todo category (id)
//process : 1)push data into todo array + 
//          2)save data immediately in local sotrage
//output :---;
let addData = function(title , id){
    let keyID = uuidv4();
    todo.push({
        key : keyID,
        id:id,
        title:title,
        body : ''
    })

    saveDataInLocalStorage('todos' , todo);
    
};


//function getLocalData
//input: ---
//process: get data from local Storage
//output: local storage data
let getLocalData = function () {
    if(localStorage.getItem('todos') !== null){
        return JSON.parse(localStorage.getItem('todos'));
    }
    else{
        return [];
    }
}

//removeTodo
//input : get title of Item to be removed
//process: find index in todo array and remove it
//output: now one item has removed from todo array
const removeTodo = function(title){
    
    let todoIndex = todo.findIndex(function (item) {
        return item.title === title;
    });
    
    if(todoIndex > -1){
        todo.splice(todoIndex , 1);
    }
   
    else{
        console.log('item not find');
    }
    
}

//function renderTodos
//input : todo array
//process : put each todo array object on the related card
//output: ---
let renderTodos = function (todo) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        card.children[0].children[1].innerHTML ='';
        todo.forEach(function (td) {
            if(td.id === card.id){
                //li
                let li = document.createElement('li');
                li.className = 'task-item';
                li.textContent = td.title;
                //button
                let btn = document.createElement('button');
                btn.className = 'remove-item icon-trash';
                btn.addEventListener('click' , function(e){
                    let targetTitle = e.target.parentNode.textContent;
                    //1. remove the item from todo array
                    removeTodo(targetTitle);
                     //2. save the todo in localStorage again
                    saveDataInLocalStorage('todos' , todo);
                    //3. delete the item from the user interface
                    renderTodos(todo);

                });
                
                //make a div
                let div = document.createElement('div');
                div.className = 'ml-auto d-flex align-items-center'
                //make a button for remove
                let editEl = document.createElement('button');
                editEl.className = 'edit-todo icon-pen-tool btn btn-light';

                //give 2 buttons a parent
                div.appendChild(editEl);
                div.appendChild(btn);

                li.appendChild(div);
                
                card.children[0].children[1].appendChild(li);
                
            }
        })
    });

}

//configureElement
//input : event , card id
//output :  ---
let configureElement = function(e , cardID) {
   
    //crate li
    const li = document.createElement('li');
    //configure li
    li.textContent = e.target.parentNode.children[0].value;
    e.target.parentNode.children[0].value = '';
    li.className = 'task-item';

    //create close btn
    const btn = document.createElement('button');
    //configure btn
    btn.innerHTML = '&times;'
    btn.className = 'remove-item';

    // append btn to li
    li.appendChild(btn);

    console.log(ulTaskArr);
    let properUl = ulTaskArr.find(function(item) {
        return item.parentNode.parentNode.id === cardID;
    })

    properUl.appendChild(li);
}