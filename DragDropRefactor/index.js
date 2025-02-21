document.addEventListener("DOMContentLoaded", () => {
   const items = document.querySelectorAll(".draggable");
   document.getElementById('startButton').addEventListener('click', () => {
       document.getElementById('startButton').disabled = true;
       // Hide the grayed-out rectangles (page-load)
       document.querySelector('.page-load').style.display = 'none';

       // Store all game containers except the one with class 'page-load'
       const gameContainers = [...document.querySelectorAll('.game-container:not(.page-load)')];

       // Show the round 1 content (round1Content)
       gameContainers[0].style.display = 'flex';
       gameContainers[0].classList.add('active');
       setTimeout(() => {
           gameContainers[0].classList.remove('active'); // Remove after animation runs
       }, 1000); 
       console.log(gameContainers[0]);
   });

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
   const scrollThreshold = 50; // Threshold for scrolling

   items.forEach((item, index) => {
       item.style.touchAction = "none";
       item.dataset.index = index;
       item.addEventListener("pointerdown", (e) => {
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
           // Update offsetX and offsetY to include scroll position
           offsetX = rect.left + window.scrollX; // Include scroll position
           offsetY = rect.top + window.scrollY;  // Include scroll position
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

       // Scroll the document if near the top or bottom
       if (e.clientY < scrollThreshold) {
           window.scrollBy(0, -10); // Scroll up
       } else if (window.innerHeight - e.clientY < scrollThreshold) {
           window.scrollBy(0, 10); // Scroll down
       }

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
           draggedItem = null;
           return;
       }

       let dropped = false;
       const sound = new Audio('Catch-catchers-gloves.mp3');

       targets.forEach(target => {
        let rect = target.getBoundingClientRect();
        const scrollY = window.scrollY; 
    
        let draggedRect = draggedItem.getBoundingClientRect();
    
        let overlapX = Math.max(0, Math.min(draggedRect.right, rect.right) - Math.max(draggedRect.left, rect.left));
        let requiredOverlapX = rect.width * 0.8; // 80% of the target width
    
        if (
            overlapX >= requiredOverlapX && // Ensure at least 80% horizontal overlap
            e.pageY >= rect.top + scrollY && e.pageY <= rect.bottom + scrollY
        ){
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
                   draggedItem.style.paddingTop = "7px";
                   draggedItem.style.marginBottom = 0;
                   draggedItem.style.marginTop = "7px";
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

       item.classList.add("snap-back");
       
      setTimeout(() => {
         item.classList.remove("snap-back");
      }, 1000);
   }

   function onFinalMatch() {
       const gameContainers = [...document.querySelectorAll('.game-container:not(.page-load)')];
       console.log(gameContainers); // Log all game containers

       // Find the currently visible game container
       const currentContainer = gameContainers.find(container => container.style.display !== 'none');
       currentContainer.style.flexDirection = "column";
       const nicknameContainer = currentContainer.querySelector('.nickname-container');
       nicknameContainer.classList.add('hidden');
       const roundComplete = currentContainer.querySelector('.round-complete');
       roundComplete.classList.add('visible');

       // Log the currently visible container
       if (currentContainer) {
           console.log(`${currentContainer.classList.contains('round-1') ? 'Game Container 1' : 'Game Container 2'} passes`);
       } else {
           console.log('No visible game container found');
       }
   }

   let currentIndex = 0; // Variable to track the current game container

   function checkIfRoundComplete() {
       const gameContainers = [...document.querySelectorAll('.game-container:not(.page-load)')];
       const gameOverContainer = document.querySelector('.game-over'); // Get the game-over container
       const currentContainer = gameContainers[currentIndex];

       const dropzones = currentContainer.querySelectorAll('.dropzone');
       const allMatched = Array.from(dropzones).every(target => {
           const droppedItem = target.children[0];
           return droppedItem && droppedItem.dataset.match === target.dataset.match;
       });

       if (allMatched) {
         onFinalMatch();
 
         // Determine which sound to play
         if (currentIndex === gameContainers.length - 2) {
             const finalWinSound = new Audio('game-over-sound.mp3'); // Play different sound for last round
             finalWinSound.play();
         } else {
             const winSound = new Audio('calvary-charge.mp3');
             winSound.play();
         }
 
         // Set a timeout to transition to the next round or show game-over
         setTimeout(() => {
             currentContainer.style.display = 'none';
             currentIndex++;
 
             if (currentIndex < gameContainers.length) {
                 const nextContainer = gameContainers[currentIndex];
                 gameContainers.forEach(container => container.classList.remove('active'));
                 nextContainer.style.display = 'flex';
                 nextContainer.classList.add('active');
                 setTimeout(() => {
                     nextContainer.classList.remove('active');
                 }, 1000); 
             } else {
                 gameOverContainer.style.display = 'flex';
             }
         }, 8000);
     }
 
   }
});
