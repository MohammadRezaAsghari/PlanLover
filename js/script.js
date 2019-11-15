
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

        const titleText = e.target.parentNode.parentNode.textContent;
        const editInput = document.getElementById('editTitle');
        console.log(editInput);
        editInput.value = titleText;
        
        
        
    }

});







