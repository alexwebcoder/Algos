// import './style.css'

class RaceCar {
  constructor() {
    this.car = document.getElementById('race-car');
    this.gasPedal = document.getElementById('gas');
    this.raceTrack = document.getElementById('car-container');
    this.moveCarDistance = 0;
    this.fullTrackWidth = 0;
  }

  init() {
   const {gasPedal} = this;

   gasPedal.addEventListener('click', () => this.moveCar() )

   const trackStyles = getComputedStyle(this.raceTrack, 'width');

   const trackWidth = parseFloat(trackStyles.width);

   this.fullTrackWidth = trackWidth;

   this.moveCarDistance = trackWidth * .20;

   this.car.style.left = '0px';
  }
 
  moveCar() {
    console.log('move car working')
    const currentLeft = parseFloat(getComputedStyle(this.car).left);
    console.log(currentLeft)

    const newLeft = currentLeft + 100;
    console.log(newLeft)

    this.car.style.left = newLeft + 'px';
  }
}

const newCar = new RaceCar();
newCar.init()
