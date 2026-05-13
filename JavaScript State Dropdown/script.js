//STATE IS JUST VARIABLES AND THE UI REACTING TO THEM

// grab elements
const button = document.getElementById("dropdownBtn");
const dropdown = document.getElementById("dropdown");
const items = dropdown.querySelectorAll("li");

// create state

let isOpen = false;
let selectedValue = "";

//toggle dropdown

button.addEventListener("click", () => {
 //on click it flips/toggles the value of isOpen to the opposite of what it currently is
 //it is changing the memory state
  isOpen = !isOpen;
  
  if(isOpen){
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.add("hidden");
  }
});

//to select an item

items.forEach(item => {
    item.addEventListener("click", (e) => {
        selectedValue = e.target.dataset.value;
        button.textContent = selectedValue;
        isOpen = false;
        dropdown.classList.add("hidden");
    });
})

document.addEventListener("click", (e)=>{
    if(!button.contains(e.target) && !dropdown.contains(e.target)){
        isOpen = false;
        dropdown.classList.add("hidden");
    }
})