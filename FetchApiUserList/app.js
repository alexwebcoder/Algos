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
   App.appendChild(ul)

    fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => {
           if(!response.ok){
               throw new Error('Response not ok')
            } return response.json()
        })
        .then(data => {
          const namesAndEmails = data.map(({name, email})=>({name, email}))
          console.log(namesAndEmails)
       })
       .catch(error => {
        throw error;
       })
}


button.addEventListener('click', fetchUserData)