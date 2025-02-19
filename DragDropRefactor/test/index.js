document.addEventListener("DOMContentLoaded", () => {
    const divs = document.querySelectorAll('.my-div'); // Select all divs with the class 'my-div'
    let draggedDiv = null;

    // Hide all divs except the first one
    divs.forEach((div, index) => {
        if (index !== 0) {
            div.style.display = 'none'; // Hide all divs except the first one
        } else {
            div.style.display = 'flex'; // Show the first div
        }
    });

    // Make all divs draggable
    divs.forEach((div) => {
        div.draggable = true;

        // Add event listener for dragstart
        div.addEventListener("dragstart", (e) => {
            draggedDiv = e.target; // Store the currently dragged div
            setTimeout(() => {
                e.target.style.display = "none"; // Hide the dragged div during drag
            }, 0);
        });
    });

    // Add an event listener for dragover to allow dropping
    document.body.addEventListener("dragover", (e) => {
        e.preventDefault(); // Prevent default behavior to allow drop
    });

    // Add an event listener for drop
    document.body.addEventListener("drop", (e) => {
        const deltaX = e.clientX - (draggedDiv.getBoundingClientRect().left + draggedDiv.offsetWidth / 2); // Calculate horizontal distance
        if (deltaX >= 30) { // Check if dragged at least 30px to the right
            draggedDiv.style.display = "none"; // Hide the dragged div
            
            const currentDivIndex = Array.from(divs).indexOf(draggedDiv); // Get the index of the current div
            const nextDiv = divs[currentDivIndex + 1]; // Get the next div

            if (nextDiv) {
                nextDiv.style.display = "flex"; // Show the next div
            }
        }
    });
});
