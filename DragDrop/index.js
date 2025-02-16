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
    let isDragging = false;  // Flag to track if the item is actually being dragged
    let moveThreshold = 5;   // Minimum distance to consider it a drag

    items.forEach((item, index) => {
        item.style.touchAction = "none";
        item.dataset.index = index;
        item.addEventListener("pointerdown", (e) => {
            e.preventDefault(); // Prevent scrolling on mobile
            draggedItem = item;
            originalParent = item.parentElement;
            const rect = item.getBoundingClientRect();
            startX = e.pageX;
            startY = e.pageY;
            offsetX = rect.left;
            offsetY = rect.top;
            originalWidth = rect.width;
            item.style.position = "absolute";
            item.style.width = `${originalWidth}px`; // Maintain original width
            item.style.left = `${offsetX}px`;
            item.style.top = `${offsetY}px`;
            item.style.zIndex = "1000";
            item.classList.add("dragging");

            // Prevent scrolling while dragging
            document.body.style.touchAction = "none"; 
            
            // Start listening for movement
            document.addEventListener("pointermove", onPointerMove, { passive: false });
            document.addEventListener("pointerup", onPointerUp);
        });
    });

    function onPointerMove(e) {
        if (!draggedItem) return;

        let deltaX = e.pageX - startX;
        let deltaY = e.pageY - startY;

        // Check if the item has moved more than the threshold
        if (!isDragging && (Math.abs(deltaX) > moveThreshold || Math.abs(deltaY) > moveThreshold)) {
            isDragging = true; // Mark as being dragged
            draggedItem.style.backgroundColor = "rgba(255, 255, 0, 0.2)"; // Yellow background
            draggedItem.style.border = "4px solid #0099ff"; // Blue border
        }

        draggedItem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }

    function onPointerUp(e) {
        if (!draggedItem) return;
        
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);

        // If the item was clicked but not dragged, reset the styles
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
                }
            }
        });

        if (!dropped) {
            resetItemPosition(draggedItem);
        }

        draggedItem.classList.remove("dragging");
   

        draggedItem = null;
        isDragging = false;  // Reset dragging state
        document.body.style.touchAction = "auto"; // Re-enable scrolling
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
});
