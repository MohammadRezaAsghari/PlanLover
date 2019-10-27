// add a todo

const cardHolder = document.querySelector('#card-holder');
let ulTasks = document.querySelectorAll('ul.task');
let ulTaskArr = Array.from(ulTasks);
cardHolder.addEventListener('click', function(e) {
    e.preventDefault();

    if (e.target.className === 'btn btn-dark commit') {
        if (e.target.parentNode.children[0].value !== '') {
            //crate li
            const li = document.createElement('li');
            //configure li
            li.textContent = e.target.parentNode.children[0].value;
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
                return item.parentNode.parentNode.id === e.target.parentNode.parentNode.parentNode.id;
            })

            properUl.appendChild(li);
        }

    }





})