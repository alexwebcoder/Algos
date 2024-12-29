const ul = document.querySelector('ul');
let input = document.querySelector('input');
const button = document.querySelector('button');

function addItem() {
    const currentValue = input.value;
    input.value = '';

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    li.appendChild(span);
    li.appendChild(deleteButton);
    span.textContent = currentValue;
    deleteButton.textContent = 'Delete';
    ul.appendChild(li);

    deleteButton.addEventListener('click', ()=>{
        li.remove();
    })
    
}
input.focus();

button.addEventListener('click', addItem)

// loop assignment 1

const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');


  for (const item of myArray) {
   const li = document.createElement('li');
   li.textContent = item;
   ul.appendChild(li);
  }


const section = document.querySelector('section');
section.appendChild(list);


//loop assignment 2

const name = 'Mustafa';
const para = document.createElement('p');

const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

   for(const member of phonebook){
    for (const [key, value] of Object.entries(member)){
        console.log(`${key}, ${value}`);
    }
   }

function searchName(name) {


}
const sectionTwo = document.querySelector('.preview-phone');
sectionTwo.appendChild(para);