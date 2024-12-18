console.log('hello');
const dogs = ['beagle', 'belgian shephard', 'doberman', 'shitzoo', 'dalmation'];
console.log(dogs.length)
dogs[3] = 'hound dog';
console.log(dogs)

const random = ['car', 400, [0, 2, [5, 2, 3, 4]]];
const numberFour = random[2][2][3];
console.log(numberFour)
console.log(random.indexOf(400))

const cities = ['Smallville', 'Springfield', 'Metroville', 'Newside'];
cities.push('Fitram');
console.log(cities)
const removedCity = cities.shift();
console.log(removedCity)

const fitram = cities.pop();
console.log(fitram)

const dogIndex = dogs.indexOf('hound dog');

if(dogIndex !== -1) {
 const hound =  dogs.splice(dogIndex, 1);
 console.log(hound)
}

console.log(dogs)

const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds){
    console.log(bird);
}