
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
    // if(e.target.classList.contains('remove-item')){
        
        

        
        
        
        
       
        
    // }

});







