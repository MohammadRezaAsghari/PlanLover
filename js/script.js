
let todo = getLocalData();
renderTodos(todo);



const cardHolder = document.querySelector('#card-holder');
let ulTasks = document.querySelectorAll('ul.task');
let ulTaskArr = Array.from(ulTasks);

// Event Listneres

// Event for commit button , delegated to cardHolder
cardHolder.addEventListener('click', function(e) {
    e.preventDefault();

    if (e.target.classList.contains('btn')) {
        if (e.target.parentNode.children[0].value !== '') {
            
            let cardId = e.target.parentNode.parentNode.parentNode.id;
            addData(e.target.parentNode.children[0].value , cardId);
            configureElement(e , cardId);
            
        }

    }
    if(e.target.classList.contains('remove-item')){
        
    console.log(e.target.parentNode.parentNode.textContent);

    //1. delete from todo array
    removeTodo(e.target.parentNode.parentNode.textContent);
    //2. save todo array again
    saveDataInLocalStorage('todos' , todo);
    //3. re render the todos
    renderTodos(todo);
 
    }
    if(e.target.classList.contains('edit-todo')){

        //Work on the User Interface
        const editHolder = document.querySelector('.edit-holder');
        editHolder.style.display = 'block';
        setTimeout(function() {
            editHolder.style.opacity = '1';
        } , 100);
        setTimeout(function () {
            editHolder.firstElementChild.style.transform = 'translate(-50%,-50%) scale(1)';
        } ,200);

        //Work on the logic
        //1. prepare the edit form with correct data (title and body);
        //title
        const titleText = e.target.parentNode.parentNode.textContent;
        const editInput = document.getElementById('editTitle');
        editInput.value = titleText;
        //body
        debugger;
        let wantedTodoindex = findTodoIndex(titleText);
        debugger;
        const editBody = document.getElementById('editBody');
        editBody.value = todo[wantedTodoindex].body;
        
        
        //Event Listeners for edit-form
        document.querySelector('.edit-form').addEventListener('submit' , function(e){
        e.preventDefault();
            //1.put the new data in the proper todo
            debugger;
            todo[wantedTodoindex].title = editInput.value;
            todo[wantedTodoindex].body = editBody.value;
            debugger;
            //2.save changed to do in localStorage
            saveDataInLocalStorage('todos' , todo);
            //3.Render 
            renderTodos(todo);

            //solution change the findTodo function from find to find Index
            // I mean find the proper index and change todo[index]
        });
        
    }

});

// Event Listeners for edit-holder
document.querySelector('.edit-holder').addEventListener('click' , function (e) {
    if(e.target.classList.contains('edit-holder')){
        e.target.style.display = 'none';
    }
});








