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
            item.style.backgroundColor = "rgba(255, 255, 0, 0.2)";
            item.style.border = "4px solid #0099ff"
            document.body.style.touchAction = "none"; // Disable scrolling while dragging
            document.addEventListener("pointermove", onPointerMove, { passive: false });
            document.addEventListener("pointerup", onPointerUp);
        });
    });

    function onPointerMove(e) {
        if (!draggedItem) return;
        e.preventDefault();
        let deltaX = e.pageX - startX;
        let deltaY = e.pageY - startY;
        draggedItem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }

    function onPointerUp(e) {
        if (!draggedItem) return;
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
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
                    draggedItem.style.width = "auto";
                    draggedItem.style.zIndex = "auto";

                    draggedItem.style.backgroundColor = "transparent";
                    draggedItem.style.border = "none";
                    draggedItem.style.paddingTop = 0;

                    sound.play();
                    dropped = true;
                }
            }
        });
        if (!dropped) {
            resetItemPosition(draggedItem);
        }
        draggedItem.classList.remove("dragging");
        draggedItem = null;
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
        originalParent.insertBefore(item, originalParent.children[index]);
    }
});
