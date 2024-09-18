(function(){
 
 const app = document.getElementById('toDoApp');
 const h1 = document.createElement('h1')
 h1.textContent = 'To-Do List';
 app.appendChild(h1)

 const input = document.createElement('input');
 input.type = 'text';
 input.placeholder = 'Enter your task';
 input.id = 'taskInput'
 app.appendChild(input)




})()