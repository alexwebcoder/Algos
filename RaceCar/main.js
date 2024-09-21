// import './style.css'

class RaceCar {
  constructor() {
    this.car = document.getElementById('race-car');
    this.gasPedal = document.getElementById('gas');
    this.reversePedal = null;
    this.raceTrack = document.getElementById('car-container');
    this.moveCarDistance = 0;
    this.fullTrackWidth = 0;
  }

  init() {
   const {gasPedal} = this;

   gasPedal.addEventListener('click', () => this.moveCar('forward') )

   const trackStyles = getComputedStyle(this.raceTrack);

   this.addReversePedal();

   const trackWidth = parseFloat(trackStyles.width);

   this.fullTrackWidth = trackWidth;

   this.moveCarDistance = trackWidth * 1;

   this.car.style.left = '0px';

   this.car.style.transition = 'left 0.3s ease'
  }
 
  moveCar(direction) {
    const currentLeft = parseFloat(getComputedStyle(this.car).left);
    let newLeft = currentLeft ;
   
    if(direction === 'forward') {

        newLeft = Math.min(currentLeft + this.moveCarDistance, this.fullTrackWidth - this.car.offsetWidth)
    }

    if(direction === 'backward') {
        newLeft = Math.max(currentLeft - this.moveCarDistance, 0)
    }

    this.car.style.left = newLeft + 'px';
  }

  addReversePedal() {
    const pedalContainer = document.getElementById('pedal-container');
    const reverseButton = document.createElement('button');
    reverseButton.id = 'reverse';
    reverseButton.type = 'button';
    reverseButton.innerText = 'Reverse';
    pedalContainer.appendChild(reverseButton);

    this.reversePedal = document.getElementById('reverse');
    this.reversePedal.addEventListener('click', ()=> this.moveCar('backward'))
  }
}

const newCar = new RaceCar();
newCar.init()
