
    const x = 1;

    function a() {
      const y = 2;
      output(z)
    }

    function b() {
      const z = 3;
      output(y)
    }

    function output(value) {
      const para = document.createElement('p');
      document.body.appendChild(para);
      para.textContent = `Value: ${value}`;
    }

    //functions 1
(function(){
    
    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    const para = document.createElement('p');
    
    function chooseName() {
        let randomIndex = Math.floor(Math.random() * (names.length));
        para.textContent = names[randomIndex]
    }
    
    const section = document.querySelector('section');
    
    section.appendChild(para);
    chooseName()
    
})();

//functions 2

(function(){
    const canvas = document.querySelector('canvas');
     const ctx = canvas.getContext('2d');
    
     const x = 50;
     const y = 60;
     const width = 100;
     const height = 75;
     const color = 'blue';
    
     function createRectangle(){
        ctx.clearRect(x, y, width, height);
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
     }
     createRectangle()
    
    //  const section = document.querySelector('.preview-canvas');

})();

//functions 3

(function(){
    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    const para = document.createElement('p');

   let min = 0;
   let max = names.length - 1;

    const random = (min, max) => {
        let randomNo = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNo;
    };
    
    function chooseName(array, min, max) {
      console.log(random(min, max))
      return para.textContent = array[random(min, max)];
    }
    
    const section = document.querySelector('.preview-random-new');
    
    section.appendChild(para);
    chooseName(names, min, max);
})();

//functions 4

(function(){
    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
    const para = document.createElement('p');
   
    // function isShort(name) {
    //   return name.length < 5;
    // }

    const isShort = name => name.length < 5;
   
    const shortNames = names.filter(isShort);
    para.textContent = shortNames;
   
    // Don't edit the code below here!
   
    const section = document.querySelector('.preview-names');
   
    section.appendChild(para);
   
   })();
