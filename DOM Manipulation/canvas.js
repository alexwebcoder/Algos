   

   const container = document.createElement('div');
   container.classList.add('container');
   document.body.appendChild(container);

    const canvas = document.createElement('canvas');
    canvas.width = 480;
    canvas.height = 320;
    container.appendChild(canvas);

    const button = document.createElement('button');
    button.classList.add('draw-rectangle');
    button.textContent = 'Draw a Rectangle';
    container.appendChild(button)
    
    const ctx = canvas.getContext('2d');
        const x = 50;
        const y = 60;
        const width = 100;
        const height = 75;
        const color = 'blue';
    
        // Add your code here
    
        // function drawRectangle(x, y, width, height, color){
        //   ctx.clearRect(0, 0, canvas.width, canvas.height);
        //   ctx.fillStyle = color;
        //   ctx.fillRect(x, y, width, height)
        // }

        button.addEventListener('click', ()=> {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const randomX = Math.floor(Math.random() * (canvas.width - width));
            const randomY = Math.floor(Math.random() * (canvas.height - height));

            ctx.fillStyle = color;
            ctx.fillRect(randomX, randomY, width, height)
        });
    
        // Don't edit the code below here!
    
        const section = document.querySelector('section');


