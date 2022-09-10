const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

// adding todo
const generateTodo = todo => {
    const tml =
   ` <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa-solid fa-trash-can delete"></i>
            </li>`
            list.innerHTML += tml;
}

// submit todo
addForm.addEventListener('submit',e => {

e.preventDefault()
const todo = e.target.add.value.trim();

if(todo.length){
generateTodo(todo);
e.target.reset()
}

});

// delete todo
list.addEventListener('click',e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
});

// searching todo
const filterTodo = (te)=>{

 Array.from(list.children)
 .filter(h => h.textContent.toLowerCase().includes(te))
 .forEach(m => m.classList.add('filtered'))

 Array.from(list.children)
 .filter(h => !h.textContent.toLowerCase().includes(te))
 .forEach(m => m.classList.remove('filtered'))

}
search.addEventListener('keyup',()=>{
     const term = search.value.trim().toLowerCase()
     filterTodo(term)
});
