//function add data
//input : todo title , todo category (id)
//process : 1)push data into todo array + 
//          2)save data immediately in local sotrage
//output :---;
let addData = function(title , id){
    todo.push({
        id:id,
        title:title,
        body : ''
    })

    localStorage.setItem('todos' , JSON.stringify(todo));
    
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

//function renderTodos

let renderTodos = function (todo) {
    const cards = document.querySelectorAll('.card');
    console.log(cards);
    cards.forEach(function (card) {
        todo.forEach(function (td) {
            if(td.id === card.id){
                //li
                let li = document.createElement('li');
                li.className = 'task-item';
                li.textContent = td.title;
                //button
                let btn = document.createElement('button');
                btn.innerHTML = '&times;'
                btn.className = 'remove-item';

                li.appendChild(btn);
                
                card.children[0].children[1].appendChild(li);
                
            }
        })
    });

}

//configureElement

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