const button = document.createElement('button');
button.textContent = 'Get User Data'
const paragraph = document.createElement('p')
paragraph.textContent = 'Loading...'
const App = document.getElementById('app');
App.appendChild(paragraph)
App.appendChild(button)



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
            li.textContent = `Name: ${name}, Email: ${email}`;
            ul.appendChild(li)
        })
        return nameEmail;
     })
     .catch(error => {      
        console.error('There was an error:', error);;
     })
}


button.addEventListener('click', fetchUserData)

