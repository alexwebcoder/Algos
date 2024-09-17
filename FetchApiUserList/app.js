const h1 = document.createElement('h1');
h1.textContent = 'Fetch and Display User Data';
const button = document.createElement('button');
button.textContent = 'Get User Data'
const paragraph = document.createElement('p')
paragraph.textContent = 'Loading...'
const App = document.getElementById('app');
App.appendChild(paragraph)
App.insertAdjacentElement('beforebegin', h1);
App.insertAdjacentElement('afterend', button)



function fetchUserData(){
    paragraph.style.display = 'none';
    button.disabled = true;
   const ul = document.createElement('ul')
         ul.classList.add('li-parent')
   App.appendChild(ul)
   fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => {
        if(!response.ok){
            throw new Error('Response not ok')
        } return response.json();
     })
     .then(data => {
        const nameEmail = data.map(({name, email}) => ({name, email}));

        nameEmail.forEach(({name, email}) => {
           
            const li = document.createElement('li');

          const nameSpan = document.createElement('span');
          nameSpan.classList.add('label');
          nameSpan.textContent = 'Name: ';
          li.appendChild(nameSpan);
          li.appendChild(document.createTextNode(name));
          
          const emailSpan = document.createElement('span');
          emailSpan.classList.add('label');
          emailSpan.textContent = ' Email: ';
          li.appendChild(emailSpan);
          li.appendChild(document.createTextNode(email));

          ul.appendChild(li);

        })
        return nameEmail;
     })
     .catch(error => {      
        console.error('There was an error:', error);;
     })
}


button.addEventListener('click', fetchUserData)

