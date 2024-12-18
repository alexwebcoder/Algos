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

function double(number){
    return number * 2;
}

const numbers = [4, 3, 5, 7, 8];
const doubled = numbers.map(double);
console.log(doubled);

function isLong(town){
    return town.length > 8;
}

const towns = ['London', 'Riverside', 'Los Angeles', 'Oakland', 'Chicago', 'Spring', 'Chico'];

const greaterThanEight = towns.filter(isLong);
console.log(greaterThanEight)

const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const splitData = data.split(',');
console.log(splitData[4], splitData[splitData.length - 1]);
console.log(splitData.join(' * '));

const dogNames = ['Maja', 'King', 'Lobo', 'Sheena', 'Skippy', 'Macho', 'Macho II', 'Erika', 'Funny Ears', 'The Runt'];
const dogNameString = dogNames.toString();
console.log(dogNameString)

const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.textContent = '';
totalBox.textContent = '';
//number 1

const productStrings = 'Underpants:6.99 ' +
                 'Socks:5.99 ' +
                 'T-shirt:14.99 ' +
                 'Trousers:31.99 ' +
                 'Shoes:23.99';
// console.log(productStrings)
const products = productStrings.split(' ');
 console.log(products)

//number 2

for(const product of products){
//number 3    
   const name = product.split(':')[0], price = Number(product.split(':')[1]);
//number 4
   total += price;

//number 5
   let itemText = `${name}--$${price}`;
   const listItem = document.createElement('li');
   listItem.textContent = itemText;
   list.appendChild(listItem);
}


