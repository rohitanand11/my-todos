var form_var	= document.querySelector("form");
var input_var 	= document.querySelector("input");
var todoList_var 	= document.querySelector("ul");
var button_var 	= document.querySelector("button");

var todosArray =localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')):[];

localStorage.setItem('todos',JSON.stringify(todosArray));

var storage = JSON.parse(localStorage.getItem('todos'));

form_var.addEventListener('submit',function(e) {

	e.preventDefault();

	todosArray.push(input_var.value);
	localStorage.setItem('todos',JSON.stringify(todosArray));

	todomaker(input_var.value);
	input_var.value='';

});

var todomaker = function(text) {

	var todo_var = document.createElement('li');
	todo_var.textContent = text;
	todoList_var.appendChild(todo_var);
}

for(var i=0;i<storage.length;i++){

	todomaker (storage[i]);
}

button_var = addEventListener('click',function(){

	localStorage.clear();
	
	while(todoList_var.firstChild) {

		todoList_var.removeChild(todoList_var.firstChild);
	}
});