function outputName() {

  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
 
  const instructions = document.createElement('p');
  instructions.classList.add('instructions')
  instructions.textContent = 'Push the button to display a Random Name';
  container.appendChild(instructions);
  
  const button = document.createElement('button');
  button.textContent = 'Show Random Name';
  container.appendChild(button);
  
  const display = document.createElement('p');
  display.classList.add('display');
  display.textContent = '';
  container.appendChild(display);
  
  const names = ['Larry', 'Gene', 'Pedro', 'Lisa', 'Jennie', 'Willis', 'Perry', 'Serge', 'Popi'];
  let lastRandomIndex = null;

  button.addEventListener('click', () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * names.length);
    }while(randomIndex === lastRandomIndex);

    lastRandomIndex = randomIndex;
    display.textContent = names[randomIndex];
  });
}

outputName();
