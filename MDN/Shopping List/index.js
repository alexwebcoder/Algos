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


function searchName(name) {
    // for(const member of phonebook){
    //     if(member.name === name){
    //         para.textContent = `${member.name} ${member.number}`;
    //         break;
    //     }
    //    }

    for(let i = 0; i < phonebook.length; i ++){
      if(name === phonebook[i].name){
        para.textContent = `${phonebook[i].name} ${phonebook[i].number}`;
        break;
      } else{
        para.textContent = `Name not found!`
      }
    }
}
searchName(name);

const sectionTwo = document.querySelector('.preview-phone');
sectionTwo.appendChild(para);

//loops assignment 3


let i = 500;
    const paraTwo = document.createElement('p');

    function isPrime(num) {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }

      return true;
    }

      while(i >= 2){
       if(isPrime(i)){
        paraTwo.textContent += `${i}, `;
       } 
       i--
      }

    const sectionThree = document.querySelector('.preview-prime');
    sectionThree.appendChild(paraTwo);