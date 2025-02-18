document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('startButton').disabled = true;
    // Hide the grayed-out rectangles (round1)
    document.querySelector('.page-load').style.display = 'none';
 
    // Show the round 1 content (round1Content)
    document.querySelector('.round-1').style.display = 'flex';
 });

 // Function to scramble a word consistently
function scrambleWord(word) {
    return word.split('').sort(() => 0.5 - Math.random()).join('');
}

// Get all unique data-match values from both draggable and dropzone items
const matchValues = new Set([...document.querySelectorAll('.draggable, .dropzone')].map(item => item.getAttribute('data-match')));

// Create a scrambled mapping
const scrambledMapping = {};
matchValues.forEach(value => {
    scrambledMapping[value] = scrambleWord(value);
});

// Apply the scrambled mapping to both draggable and dropzone items
document.querySelectorAll('.draggable, .dropzone').forEach(item => {
    const originalMatch = item.getAttribute('data-match');
    if (originalMatch && scrambledMapping[originalMatch]) {
        item.setAttribute('data-match', scrambledMapping[originalMatch]);
    }
});


 
 
 document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".draggable");
    const targets = document.querySelectorAll(".dropzone");
    let draggedItem = null;
    let originalParent = null;
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let originalWidth = 0;
    let isDragging = false;
    let moveThreshold = 5;
 
    items.forEach((item, index) => {
       item.style.touchAction = "none";
       item.dataset.index = index;
       item.addEventListener("pointerdown", (e) => {
          // Check if the item has the 'grayed' class
          if (item.classList.contains("grayed")) {
             e.preventDefault(); // Prevent dragging if it's grayed
             return;
          }
 
          if (item.classList.contains("locked")) {
             e.preventDefault();
             return;
          }
 
          e.preventDefault(); // Prevent scrolling on mobile
          draggedItem = item;
          originalParent = item.parentElement;
          const rect = item.getBoundingClientRect();
          startX = e.pageX;
          startY = e.pageY;
          offsetX = rect.left;
          offsetY = rect.top;
          originalWidth = rect.width;
 
          // Prevent scrolling while dragging
          document.body.style.touchAction = "none";
 
          // Start listening for movement
          document.addEventListener("pointermove", onPointerMove, {
             passive: false
          });
          document.addEventListener("pointerup", onPointerUp);
       });
    });
 
    function onPointerMove(e) {
       if (!draggedItem) return;
 
       let deltaX = e.pageX - startX;
       let deltaY = e.pageY - startY;
 
       if (!isDragging && (Math.abs(deltaX) > moveThreshold || Math.abs(deltaY) > moveThreshold)) {
          isDragging = true;
 
          draggedItem.style.position = "absolute";
          draggedItem.style.width = `${originalWidth}px`;
          draggedItem.style.left = `${offsetX}px`;
          draggedItem.style.top = `${offsetY}px`;
          draggedItem.style.zIndex = "1000";
          draggedItem.classList.add("dragging");
 
          draggedItem.style.backgroundColor = "rgba(255, 255, 0, 0.2)";
          draggedItem.style.border = "4px solid #0099ff";
       }
 
       if (isDragging) {
          draggedItem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
       }
    }
 
    function onPointerUp(e) {
       if (!draggedItem) return;
 
       document.removeEventListener("pointermove", onPointerMove);
       document.removeEventListener("pointerup", onPointerUp);
 
       if (!isDragging) {
          draggedItem.style.backgroundColor = "transparent";
          draggedItem.style.border = "none";
       }
 
       let dropped = false;
       const sound = new Audio('Catch-catchers-gloves.mp3');
 
       targets.forEach(target => {
          let rect = target.getBoundingClientRect();
          if (
             e.pageX >= rect.left && e.pageX <= rect.right &&
             e.pageY >= rect.top && e.pageY <= rect.bottom
          ) {
             if (target.dataset.match === draggedItem.dataset.match) {
                target.appendChild(draggedItem);
                draggedItem.style.position = "static";
                draggedItem.style.transform = "none";
                draggedItem.style.width = "100%";
                draggedItem.style.zIndex = "auto";
                draggedItem.style.backgroundColor = "transparent";
                draggedItem.style.border = "none";
                draggedItem.style.borderRadius = 0;
                draggedItem.style.borderTop = "3px solid #FFF";
                draggedItem.style.padding = 0;
                draggedItem.style.marginBottom = 0;
                draggedItem.style.color = "#FFF";
 
                sound.play();
                target.style.border = "3px solid green";
                target.style.backgroundColor = "green";
                target.style.color = "#FFF";
                dropped = true;
 
                draggedItem.classList.add("locked");
                draggedItem.classList.remove("dragging");
             }
          }
       });
 
       if (!dropped) {
          resetItemPosition(draggedItem);
          draggedItem.classList.remove("locked");
       }
 
       draggedItem = null;
       isDragging = false;
       document.body.style.touchAction = "auto";
 
       checkIfRoundComplete();
    }
 
    function resetItemPosition(item) {
       const index = item.dataset.index;
       item.style.transform = "none";
       item.style.position = "relative";
       item.style.left = "auto";
       item.style.top = "auto";
       item.style.width = "auto";
       item.style.zIndex = "auto";
 
       item.style.backgroundColor = "transparent";
       item.style.border = "3px solid #1b3a6b";
       originalParent.insertBefore(item, originalParent.children[index]);
    }
 
    function onFinalMatch() {
       const visibleNicknameContainers = document.querySelectorAll(
          '.nickname-container:not(.hidden):not(.game-container[style*="display: none"] .nickname-container)'
       );
       const lastVisible = visibleNicknameContainers[visibleNicknameContainers.length - 1];
 
       if (lastVisible) {
          lastVisible.classList.add('hidden');
       }
 
       const roundComplete = document.querySelector('.round-complete');
 
       const visibleGameContainers = document.querySelectorAll(
          '.game-container:not([style*="display: none"])'
       );
 
       visibleGameContainers.forEach(container => {
          container.classList.add('round-complete-active');
       });
 
       roundComplete.classList.add('visible');
 
       const allMatched = Array.from(document.querySelectorAll('.dropzone')).every(target => {
          const droppedItem = target.children[0];
          return droppedItem && droppedItem.dataset.match === target.dataset.match;
       });
 
       if (allMatched) {
 
          const winSound = new Audio('calvaryCharge.mp3');
          winSound.play();
       }
    }
 
    function checkIfRoundComplete() {
       const allMatched = Array.from(targets).every(target => {
          const droppedItem = target.children[0];
          return droppedItem && droppedItem.dataset.match === target.dataset.match;
       });
 
       if (allMatched) {
          onFinalMatch();
       }
    }
 });